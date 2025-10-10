import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization.",
    tech: ["React", "TypeScript", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    title: "Restaurant App Backend",
    description: "Backend CRUD application for a restaurant with MongoDB Atlas integration and API development.",
    tech: ["Node.js", "Express", "MongoDB" , "Postman"],
    image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00MjgtY2hlZi0xM18xLnBuZw.png",
    github: "https://github.com/haasham1/FoodieAPI"
  },
  {
    title: "Real Estate Dashboard",
    description: "Interactive dashboard for managing and viewing real estate properties with detailed information and filtering capabilities.",
    tech: ["HTML", "CSS", "TypeScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
    github: "https://github.com/haasham1/real-estatedashboard"
  },
  {
    title: "BookVerse - MERN Stack Book Management",
    description: "A full-featured book management system with user authentication, book catalog, and interactive features. Users can sign up, log in, browse books, and manage their reading lists.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT Authentication"],
    image: "https://img.freepik.com/free-vector/web-development-programming-laptop-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
    github: "https://github.com/haasham1/BookStore"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 bg-card animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="default" size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
