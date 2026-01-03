import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import BestsellersSection from "@/components/BestsellersSection";
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BestsellersSection />
      <AboutSection />
      <Footer />
    </>
  );
}
