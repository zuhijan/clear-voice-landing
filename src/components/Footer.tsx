import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sarah@englishwithsarah.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Top section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Sarah Chen English Tutor
            </h3>
            <p className="text-background/80 max-w-xl mx-auto">
              Helping students speak English confidently and naturally through personalized, engaging lessons.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Bottom section */}
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/80 text-sm">
              © {currentYear} Sarah Chen. All rights reserved.
            </p>
            <p className="text-background/60 text-xs mt-2">
              Professional English tutoring services • CELTA & TESOL Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
