import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ServiceIntroSection from "@/components/ServiceIntroSection";
import VehicleFleetSection from "@/components/VehicleFleetSection";
import StatsHighlight from "@/components/StatsHighlight";
import ClientLogosSection from "@/components/ClientLogosSection";
import ServicesOfferSection from "@/components/ServicesOfferSection";

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
      <VehicleFleetSection />
      <StatsHighlight />
      <ServicesOfferSection />
      <ClientLogosSection />

      <Footer />
          </>
        );
      }
