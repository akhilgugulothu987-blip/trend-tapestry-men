import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OutfitGrid from "@/components/OutfitGrid";
import TrendsSection from "@/components/TrendsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OutfitGrid />
      <TrendsSection />
      <Footer />
    </div>
  );
};

export default Index;
