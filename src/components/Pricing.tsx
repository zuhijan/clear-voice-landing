import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const lessons = [
    {
      title: "Individual Lessons",
      price: "$40",
      duration: "per hour",
      description: "One-on-one personalized attention",
      features: [
        "Fully customized curriculum",
        "Focus on your specific goals",
        "Flexible scheduling",
        "Progress tracking",
      ],
      highlight: false,
    },
    {
      title: "Conversational English",
      price: "$35",
      duration: "per hour",
      description: "Build speaking confidence",
      features: [
        "Real-life conversation practice",
        "Pronunciation improvement",
        "Vocabulary building",
        "Cultural insights",
      ],
      highlight: true,
    },
    {
      title: "Business English",
      price: "$50",
      duration: "per hour",
      description: "Advance your career",
      features: [
        "Professional communication",
        "Presentation skills",
        "Email writing",
        "Meeting & negotiation practice",
      ],
      highlight: false,
    },
    {
      title: "Exam Preparation",
      price: "$45",
      duration: "per hour",
      description: "IELTS, TOEFL, Cambridge",
      features: [
        "Test strategies & techniques",
        "Practice tests",
        "Targeted skill building",
        "Score improvement focus",
      ],
      highlight: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Lesson Types & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the lesson type that fits your needs
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {lessons.map((lesson, index) => (
            <Card 
              key={index}
              className={`border-2 transition-all duration-300 hover:scale-105 animate-fade-in relative overflow-hidden ${
                lesson.highlight 
                  ? 'border-primary shadow-elevated bg-primary/5' 
                  : 'border-border shadow-card bg-card hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {lesson.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{lesson.title}</CardTitle>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{lesson.price}</span>
                    <span className="text-muted-foreground ml-2">{lesson.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{lesson.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {lesson.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    lesson.highlight 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  Book Now
                </Button>
              </CardContent>

              {/* Decorative gradient */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">
            💡 Not sure which lesson type is right for you?
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            size="lg"
            className="border-2 hover:bg-secondary"
          >
            Book a Free 15-Minute Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
