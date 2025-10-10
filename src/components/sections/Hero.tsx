import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hi, I am</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-foreground">Haasham</span>{" "}
                <span className="text-primary">Khan</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Full Stack Web Developer | Building Scalable, Modern Web Solutions
            </p>

            <p className="text-base text-muted-foreground max-w-xl">
              Software Engineer with over 1 year of experience specializing in building
              scalable and high-performance web applications. I love designing, developing,
              and deploying apps from start to finish.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/haasham1" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/hashim-khan-b1768a220" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:haasham93@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-glow"></div>
              <img
                src={profileImage}
                alt="Haasham Khan"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
