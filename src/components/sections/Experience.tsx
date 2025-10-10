import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Developer",
    company: "Elite Tech Solutions",
    location: "London",
    period: "Aug 2025 - Present",
    achievements: [
      "Built Chrome Extensions with full-stack integrations, increasing adoption by 30%",
      "Designed and maintained RESTful APIs handling 10K+ daily requests",
      "Implemented scalable solutions for high-traffic applications",
    ],
  },
  {
    title: "JavaScript Developer",
    company: "Code is Life",
    location: "Remote",
    period: "Jun 2025 - Aug 2025",
    achievements: [
      "Developed Node.js/Django backends and React/Next.js frontends",
      "Reduced API latency by 25% through optimization techniques",
      "Collaborated with cross-functional teams on multiple projects",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Career Crafters",
    location: "Remote",
    period: "Aug 2024 - May 2025",
    achievements: [
      "Led website development, achieving 99.9% uptime",
      "Integrated scalable APIs with MongoDB/SQL databases",
      "Implemented modern UI/UX designs with React and Tailwind CSS",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`md:flex ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/2 md:px-8">
                      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">
                              {exp.location} | {exp.period}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 top-6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
