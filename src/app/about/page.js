import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import DriverSection from "@/components/job/DriverSection";
import TestimonialSection from "@/components/TestimonialSection";
import MobileAppSection from "@/components/MobileAppSection";
import WhoWeAreSection from "@/components/title/WhoWeAreSection";
import ServiceGridSection from "@/components/service/ServiceGridSection";

export default function AboutPage() {
  return (
    <>
    <Header />
    <NavBar />
      <PageHero
        title="ABOUT US"
        breadcrumb="About Us"
        bgImage="/pagebanner.jpg"
      />
      <WhoWeAreSection />

      {/* About content */}
                  <DriverSection />
                  <ServiceGridSection />
                  <TestimonialSection />
                  <MobileAppSection />

      <Footer />
    </>
  );
}
