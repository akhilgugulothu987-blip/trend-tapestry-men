import OutfitCard from "./OutfitCard";
import casualImage from "@/assets/outfit-casual.jpg";
import formalImage from "@/assets/outfit-formal.jpg";
import streetImage from "@/assets/outfit-street.jpg";
import smartImage from "@/assets/outfit-smart.jpg";
import sportImage from "@/assets/outfit-sport.jpg";
import summerImage from "@/assets/outfit-summer.jpg";

const OutfitGrid = () => {
  const outfits = [
    {
      id: 1,
      image: casualImage,
      title: "Urban Casual",
      category: "Streetwear",
      price: "$89 - $199"
    },
    {
      id: 2,
      image: formalImage,
      title: "Executive Elegance",
      category: "Formal",
      price: "$299 - $599"
    },
    {
      id: 3,
      image: streetImage,
      title: "Street Culture",
      category: "Streetwear",
      price: "$129 - $249"
    },
    {
      id: 4,
      image: smartImage,
      title: "Smart Casual",
      category: "Business",
      price: "$159 - $349"
    },
    {
      id: 5,
      image: sportImage,
      title: "Athletic Edge",
      category: "Sportswear",
      price: "$79 - $189"
    },
    {
      id: 6,
      image: summerImage,
      title: "Summer Vibes",
      category: "Casual",
      price: "$69 - $149"
    },
  ];

  return (
    <section id="outfits" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Outfits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated collections for every occasion. Find your signature style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="animate-fade-in">
              <OutfitCard {...outfit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutfitGrid;
