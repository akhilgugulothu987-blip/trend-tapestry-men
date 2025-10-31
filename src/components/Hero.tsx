import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Elevate Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Style Game
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Discover the latest trends in men's fashion. From casual streetwear to sophisticated formal wear, find your perfect look.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button size="lg" className="group">
              Explore Outfits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              View Trends
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
