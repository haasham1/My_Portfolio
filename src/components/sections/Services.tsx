import { Globe, Code, Zap, Layers, Cloud, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies and best practices.",
  },
  {
    icon: Code,
    title: "API Design & Integration",
    description: "Building robust RESTful APIs and integrating third-party services seamlessly.",
  },
  {
    icon: Layers,
    title: "UI/UX Implementation",
    description: "Creating beautiful, responsive interfaces with attention to user experience.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and efficient resource usage.",
  },
  {
    icon: Cloud,
    title: "End-to-End Web App Deployment",
    description: "Deploying and maintaining applications with high availability and reliability.",
  },
  {
    icon: Wrench,
    title: "Technical Consulting",
    description: "Providing expert guidance on architecture, technology stack, and best practices.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
