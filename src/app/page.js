"use client";

import React, { useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import TripDetailsForm from "../groups/TripDetailsForm";
import VehicleSelection from "../groups/VehicleSelection";
import GoogleMapComponent from "../components/GoogleMapComponent";
import BookingSummaryModal from "../components/BookingSummaryModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import 'antd/dist/reset.css';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const libraries = ["places"]; // Define libraries as a constant outside the component

// Helper function to sanitize place objects
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
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Ensure this environment variable is set
    libraries, // Use the constant libraries array
  });

  const handlePlaceSelected = (place, type, index = null) => {
    if (place) {
      console.log("UTC Offset (Minutes):", place.utc_offset_minutes); // Log utc_offset_minutes for debugging
    }
    if (type === "pickup") {
      setPickupPlace(place);
    } else if (type === "dropoff") {
      setDropoffPlace(place);
    } else if (type === "via") {
      const updatedViaPlaces = [...viaPlaces];
      if (index !== null) {
        if (place === null) {
          updatedViaPlaces.splice(index, 1); // Remove the via place if null
        } else {
          updatedViaPlaces[index] = place; // Update the via place
        }
      }
      setViaPlaces(updatedViaPlaces); // Update the state
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
      const waypoints = [pickupPlace, ...viaPlaces.filter((place) => place !== null), dropoffPlace]; // Filter out null values

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
      selectedVehicle, // This now contains the full vehicle object
      extras,
      paymentMethod,
      selectedDateTime, // Include date and time in booking data
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
        // alert("📩 Simple booking email sent successfully!");
      } else {
        console.error("Failed to send simple booking email");
        // alert("❌ Failed to send simple booking email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    //   alert("⚠ An error occurred while sending the simple email.");
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
    setSelectedDateTime(null); // Reset date and time

    window.location.reload(); // Force a full page reload to reset the UI
  };

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>; // Show a loading state until the API is loaded
  }

  return (
    <Elements stripe={stripePromise}>

      <div className="relative flex h-screen">
  {/* Left Section: Trip Details Form and Vehicle Selection */}
  <div
    className={`bg-[var(--color-background)] text-[var(--color-foreground)] p-4 transition-all duration-300 ${
      isVisible ? "w-1/2 lg:w-1/2" : "w-full"
    } md:w-full sm:w-full overflow-y-auto`}
  >
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
  </div>

  {/* Toggle Button for Map Visibility */}
  <button
    onClick={() => setIsVisible(!isVisible)}
    className="hidden lg:block top-2 right-15 z-50 fixed bg-[var(--color-primary)] hover:bg-[var(--color-accent)] shadow-md px-3 py-2 rounded-md text-white"
  >
    {isVisible ? "Hide Map" : "Show Map"}
  </button>

  {/* Right Section: Google Map */}
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

  {/* Booking Summary Modal */}
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
