import { Target, MessageCircle, Calendar, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChoose = () => {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Lessons",
      description: "Every lesson is designed around your unique goals, level, and learning style. No cookie-cutter approach.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: MessageCircle,
      title: "Focus on Speaking",
      description: "We prioritize real conversation practice. You'll spend most of our time speaking, not just studying grammar.",
      gradient: "from-accent to-accent/80",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Book lessons that fit your life. Morning, evening, or weekend—I work around your availability.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Globe,
      title: "Real-Life English",
      description: "Learn the English people actually use. We'll work with authentic materials, real situations, and practical vocabulary.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Me?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learning English should be effective, engaging, and tailored to you
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-soft flex-shrink-0`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
