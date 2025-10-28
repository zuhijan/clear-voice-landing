import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria González",
      role: "Business Professional",
      text: "Demetrius helped me prepare for my IELTS exam and I scored 8.0! Her teaching style is so natural and encouraging. I went from being nervous to speak English to feeling completely confident in just 3 months.",
      rating: 5,
    },
    {
      name: "Takeshi Yamamoto",
      role: "Software Engineer",
      text: "I needed to improve my English for work presentations. Demetrius lessons were practical and focused exactly on what I needed. Now I can present confidently to international clients!",
      rating: 5,
    },
    {
      name: "Ana Silva",
      role: "University Student",
      text: "The best English teacher I've ever had! Demetrius makes every lesson fun and relevant to my interests. My speaking fluency improved dramatically, and I actually look forward to our lessons.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real students
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in bg-background relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
