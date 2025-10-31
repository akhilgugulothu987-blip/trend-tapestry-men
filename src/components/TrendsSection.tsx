import { TrendingUp, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const TrendsSection = () => {
  const trends = [
    {
      icon: TrendingUp,
      title: "Oversized Fits",
      description: "Comfort meets style with relaxed silhouettes dominating the scene"
    },
    {
      icon: Sparkles,
      title: "Earth Tones",
      description: "Natural colors like beige, olive, and terracotta are making waves"
    },
    {
      icon: Zap,
      title: "Tech Fabrics",
      description: "Performance materials blend seamlessly with everyday fashion"
    }
  ];

  return (
    <section id="trends" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Current Trends
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with the latest fashion movements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <trend.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{trend.title}</h3>
                <p className="text-muted-foreground">{trend.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
