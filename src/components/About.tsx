import { GraduationCap, Award, Heart, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      text: "MA in Applied Linguistics",
    },
    {
      icon: Award,
      text: "CELTA & TESOL Certified",
    },
    {
      icon: Users,
      text: "10+ Years Experience",
    },
    {
      icon: Heart,
      text: "500+ Happy Students",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hi! I'm Sarah Chen, and I've been teaching English for over a decade. 
                My passion is helping students not just learn English, but truly <span className="text-primary font-semibold">feel confident</span> using it in real life.
              </p>
            </div>

            <div className="animate-fade-in">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I believe language learning should be <span className="text-accent font-semibold">personal, practical, and enjoyable</span>. 
                That's why every lesson is tailored to your goals—whether you're preparing for IELTS, 
                advancing your career, or simply want to have natural conversations in English.
              </p>
            </div>

            <div className="animate-fade-in">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With certifications from Cambridge (CELTA) and a Master's degree in Applied Linguistics, 
                I combine proven teaching methods with a warm, encouraging approach. 
                My students often tell me they feel like they're learning from a friend, not just a teacher.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
