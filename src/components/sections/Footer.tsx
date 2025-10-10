import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Haasham Khan</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Web Developer building scalable and modern web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-2">
              <a href="https://github.com/hashim" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/hashim-khan-b1768a220" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:haasham93@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Haasham Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
