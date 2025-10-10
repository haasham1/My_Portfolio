import { Code2, Database, Layout, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    title: "Styling & UI",
    icon: Layout,
    skills: ["Tailwind CSS", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["RESTful APIs", "Express.js", "Django", "API Integration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
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
