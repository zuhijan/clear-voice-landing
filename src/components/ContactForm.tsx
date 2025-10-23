import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you within 24 hours. Looking forward to helping you learn English!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Schedule a Lesson
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your English learning journey? Send me a message!
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border-2 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border-2 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Tell me about your English learning goals *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to improve my conversational English for work..."
                rows={6}
                className="w-full border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white py-6 text-lg shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
