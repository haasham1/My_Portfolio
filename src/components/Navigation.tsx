import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import resumeUrl from "../Haasham Khan - CV.pdf";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // If the imported resume is available, trigger a download
    if (resumeUrl) {
      const a = document.createElement("a");
      a.href = resumeUrl;
      // Suggest a filename for download
      a.download = "Haasham-Khan-CV.pdf";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background/50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">
            HK
          </a>
          
          {/* Desktop Navigation with Resume Button */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-4 bg-primary hover:bg-primary/90"
              onClick={handleResumeDownload}
            >
              Download CV
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-primary hover:bg-primary/90 hidden sm:inline-flex"
              onClick={handleResumeDownload}
            >
              CV
            </Button>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
