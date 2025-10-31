import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface OutfitCardProps {
  image: string;
  title: string;
  category: string;
  price?: string;
}

const OutfitCard = ({ image, title, category, price }: OutfitCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {price && (
          <p className="text-muted-foreground text-sm">{price}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default OutfitCard;
