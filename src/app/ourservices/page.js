import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ServiceIntroSection from "@/components/ServiceIntroSection";
import VehicleFleetSection from "@/components/VehicleFleetSection";
import StatsHighlight from "@/components/StatsHighlight";
import ClientLogosSection from "@/components/ClientLogosSection";
import ServicesOfferSection from "@/components/ServicesOfferSection";
import TripDetailsForm from "@/groups/TripDetailsForm";
import VehicleSelection from "@/groups/VehicleSelection";

export default function AboutPage() {
  return (
    <>
    <Header />
    <NavBar />
      <PageHero
        title="Service"
        breadcrumb="Our Services"
        bgImage="/pagebanner.jpg"
      />
      <ServiceIntroSection  />

{/* <TripDetailsForm
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
            /> */}


      <VehicleFleetSection />
      <StatsHighlight />
      <ServicesOfferSection />
      <ClientLogosSection />

      <Footer />
          </>
        );
      }
