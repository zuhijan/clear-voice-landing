import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tutorHero from "@/assets/tutor-hero.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Learn English with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Demetrius
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                Speak Confidently and Naturally
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Transform your English skills with personalized lessons tailored to your goals. 
              Whether you're preparing for exams, advancing your career, or simply want to speak more fluently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                Book a Trial Lesson
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6 border-2 hover:bg-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in lg:animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={tutorHero} 
                alt="Demetrius, CELTA certified English tutor with 10 years experience teaching online English lessons including IELTS preparation and business English" 
                className="w-full h-auto object-cover"
                loading="eager"
                width="600"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
