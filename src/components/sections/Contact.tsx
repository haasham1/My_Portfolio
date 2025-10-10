import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "haasham93@gmail.com",
    href: "mailto:haasham93@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0300-3566659",
    href: "tel:03003566659",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/hashim-khan-b1768a220/",
    hideValue: true
  },
  {
    icon: Github,
    label: "GitHub",
    value: "",
    href: "https://github.com/haasham1",
    hideValue: true
  },
];

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = 'service_34fkz1l';
const EMAILJS_TEMPLATE_ID = 'template_grs1jrj';
const EMAILJS_PUBLIC_KEY = 'rllySmoSYdmwQWl21';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-8 space-y-6 border-border/50 bg-card/50 backdrop-blur">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {!info.hideValue && (
                        info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
