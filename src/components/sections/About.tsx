import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 space-y-6 border-border/50 bg-card/50 backdrop-blur">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Haasham Khan, a Software Engineer with over 1 year of experience as a Full Stack
              Web Developer. I specialize in building scalable and high-performance web applications
              using modern technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in creating elegant solutions to complex problems. Whether it's
              designing intuitive user interfaces, architecting robust backend systems, or
              optimizing application performance, I'm always eager to tackle new challenges.
            </p>

            <div className="pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground">
                    B.S. in Software Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">
                    COMSATS University Islamabad | 2020 - 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-muted-foreground italic">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or staying updated with the latest trends in web development.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
