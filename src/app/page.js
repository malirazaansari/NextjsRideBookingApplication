"use client";

import React, { useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import TripDetailsForm from "../groups/TripDetailsForm";
import VehicleSelection from "../groups/VehicleSelection";
import GoogleMapComponent from "../components/GoogleMapComponent";
import BookingSummaryModal from "../components/BookingSummaryModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from "../components/Header";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ReasonsSection from "@/components/reasons/ReasonSection";
import DriverSection from "@/components/job/DriverSection";
import TestimonialSection from "@/components/TestimonialSection";
import MobileAppSection from "@/components/MobileAppSection";
import BlogSection from "@/components/blog/BlogSection";
import MoreServiceSection from "@/components/MoreServiceSection";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const libraries = ["places"];

const sanitizePlace = (place) => {
  if (!place) return null;
  return {
    formatted_address: place.formatted_address,
    geometry: place.geometry,
    name: place.name,
    utc_offset_minutes: place.utc_offset_minutes,
  };
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [pickupPlace, setPickupPlace] = useState(null);
  const [dropoffPlace, setDropoffPlace] = useState(null);
  const [viaPlaces, setViaPlaces] = useState([]);
  const [addViaPlace, setAddViaPlace] = useState(null);
  const [isWaitAndReturnDisabled, setIsWaitAndReturnDisabled] = useState(true);
  const [isWaitAndReturn, setIsWaitAndReturn] = useState(false);
  const [distance, setDistance] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showBookingSummaryModal, setShowBookingSummaryModal] = useState(false);
  const [bookingSummary, setBookingSummary] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [formKey, setFormKey] = useState(Date.now());

  const [tripDetails, setTripDetails] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [extras, setExtras] = useState({
    meetAndGreet: false,
    waitAndReturn: false,
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handlePlaceSelected = (place, type, index = null) => {
    if (place) {
      console.log("UTC Offset (Minutes):", place.utc_offset_minutes);
    }
    if (type === "pickup") {
      setPickupPlace(place);
    } else if (type === "dropoff") {
      setDropoffPlace(place);
    } else if (type === "via") {
      const updatedViaPlaces = [...viaPlaces];
      if (index !== null) {
        if (place === null) {
          updatedViaPlaces.splice(index, 1);
        } else {
          updatedViaPlaces[index] = place;
        }
      }
      setViaPlaces(updatedViaPlaces);
    }

    if (pickupPlace && dropoffPlace) {
      setIsWaitAndReturnDisabled(false);
    } else {
      setIsWaitAndReturnDisabled(true);
    }
  };

  useEffect(() => {
    if (pickupPlace && dropoffPlace && viaPlaces.length === 0) {
      setIsWaitAndReturnDisabled(false);
    } else {
      setIsWaitAndReturnDisabled(true);
    }
  }, [pickupPlace, dropoffPlace, viaPlaces]);

  const handleWaitAndReturnConfirmed = () => {
    if (pickupPlace && dropoffPlace) {
      setViaPlaces([dropoffPlace]);
      setAddViaPlace(dropoffPlace);

      setDropoffPlace((prevDropoff) => {
        console.log("Previous Dropoff:", prevDropoff);
        console.log("Setting Dropoff to:", pickupPlace);
        return pickupPlace;
      });

      setIsWaitAndReturn(true);
    }
  };

  const calculateDistance = async () => {
    if (pickupPlace && dropoffPlace) {
      const service = new window.google.maps.DistanceMatrixService();
      const waypoints = [pickupPlace, ...viaPlaces.filter((place) => place !== null), dropoffPlace];

      let totalDistance = 0;

      for (let i = 0; i < waypoints.length - 1; i++) {
        service.getDistanceMatrix(
          {
            origins: [waypoints[i].formatted_address],
            destinations: [waypoints[i + 1].formatted_address],
            travelMode: "DRIVING",
          },
          (response, status) => {
            if (status === "OK") {
              const result = response.rows[0].elements[0];
              if (result.status === "OK") {
                totalDistance += result.distance.value / 1000;
                setDistance(totalDistance);
              } else {
                console.error("Error fetching distance:", result.status);
              }
            } else {
              console.error("Error calculating distance:", status);
            }
          }
        );
      }
    } else {
      setDistance(0);
    }
  };

  useEffect(() => {
    calculateDistance();
  }, [pickupPlace, dropoffPlace, viaPlaces]);

  const handleBooking = () => {
    if (!pickupPlace || !dropoffPlace || !tripDetails.name || !tripDetails.email || !tripDetails.phone || !selectedVehicle || !paymentMethod || !selectedDateTime) {
      alert("Please fill out all required fields before booking.");
      return;
    }
    const bookingData = {
      pickupPlace: sanitizePlace(pickupPlace),
      dropoffPlace: sanitizePlace(dropoffPlace),
      viaPlaces: viaPlaces.map(sanitizePlace),
      isWaitAndReturn,
      distance,
      tripDetails,
      selectedVehicle,
      price: selectedVehicle?.price,
      extras,
      paymentMethod,
      selectedDateTime,
    };
    setBookingSummary(bookingData);
    setShowBookingSummaryModal(true);
  };

const handleBookingConfirmation = async () => {
    try {
      const response = await fetch("/api/email/sendSimpleEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingSummary }),
      });

      if (response.ok) {
        console.log("Simple booking email sent successfully!");
      } else {
        console.error("Failed to send simple booking email");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setShowBookingSummaryModal(false);
    setPickupPlace(null);
    setDropoffPlace(null);
    setViaPlaces([]);
    setAddViaPlace(null);
    setIsWaitAndReturn(false);
    setDistance(0);
    setTripDetails({ name: "", email: "", phone: "", notes: "" });
    setSelectedVehicle(null);
    setExtras({ meetAndGreet: false, waitAndReturn: false });
    setPaymentMethod(null);
    setSelectedDateTime(null);
    setFormKey(Date.now());
  };


  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
      <Elements stripe={stripePromise}>


      <div className="relative flex h-screen" key={formKey}>
        <div
            className={`bg-[var(--color-background)] text-[var(--color-foreground)] p-4 transition-all duration-300 ${
            isVisible ? "w-1/2 lg:w-1/2" : "w-full"
            } md:w-full sm:w-full overflow-y-auto`}
        >
            <Header />
            <Navbar />
            <Hero />
            <ReasonsSection />
            <TripDetailsForm
            onPlaceSelected={handlePlaceSelected}
            addViaPlace={addViaPlace}
            isWaitAndReturn={isWaitAndReturn}
            pickupPlace={pickupPlace}
            dropoffPlace={dropoffPlace}
            viaPlaces={viaPlaces}
            onTripDetailsChange={setTripDetails}
            onDateTimeChange={setSelectedDateTime}
            isLoaded={isLoaded}
            />
            <VehicleSelection
            onWaitAndReturnConfirmed={handleWaitAndReturnConfirmed}
            isWaitAndReturnDisabled={isWaitAndReturnDisabled}
            distance={distance}
            onBookNow={handleBooking}
            onVehicleSelect={setSelectedVehicle}
            onExtrasChange={setExtras}
            onPaymentMethodChange={setPaymentMethod}
            selectedDateTime={selectedDateTime}
            />
            <MoreServiceSection />
            <DriverSection />
            <TestimonialSection />
            <MobileAppSection   />
            <BlogSection />
            <Footer />

        </div>

        <button
            onClick={() => setIsVisible(!isVisible)}
            className="hidden lg:block top-2 right-15 z-50 fixed bg-[var(--color-primary)] hover:bg-[var(--color-accent)] shadow-md px-3 py-2 rounded-md text-white"
        >
            {isVisible ? "Hide Map" : "Show Map"}
        </button>

        <div className="hidden lg:block">
            <GoogleMapComponent
            isVisible={isVisible}
            pickupPlace={pickupPlace}
            dropoffPlace={dropoffPlace}
            viaPlaces={viaPlaces.filter(
                (place) => place && place.geometry && place.geometry.location
            )}
            isWaitAndReturn={isWaitAndReturn}
            isLoaded={isLoaded}
            />
        </div>

        {showBookingSummaryModal && (
            <BookingSummaryModal
            bookingSummary={bookingSummary}
            onClose={handleBookingConfirmation}
            />
        )}
      </div>
      </Elements>
  );
};

export default Home;
