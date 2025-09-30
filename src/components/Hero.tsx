import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import heroImage from "@/assets/hero-image.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a sample resume download - in real app this would be your actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with your actual resume file
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl pulse-lightning"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating-animation"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-1xl lg:text-5xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text">
                  Subhadip Karmakar
                </span>
              </h1>
              <h2 className="text-2xl lg:text-2 xl text-muted-foreground font-medium">
                Full Stack Developer & Field Tech Executive
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about creating lightning-fast, beautiful web applications 
                that deliver exceptional user experiences. Specialized in React, 
                Node.js, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="lightning-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
  variant="outline" 
  size="lg"
  className="border-primary/50 text-primary hover:bg-primary/10"
  asChild
>
  <Link to="/contact">
    <Mail className="mr-2 h-5 w-5" />
    Get In Touch
  </Link>
</Button>
            </div>

            {/* Social Links */}
           {/* Social Links */}
<div className="flex gap-4 justify-center lg:justify-start">
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/subhadipkarmakar-5a8141267/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="hover:bg-primary/20">
      <Linkedin className="h-6 w-6" />
    </Button>
  </a>

  {/* GitHub */}
  <a 
    href="https://github.com/SUBHADIPKARM" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="hover:bg-primary/20">
      <Github className="h-6 w-6" />
    </Button>
  </a>

  <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=subhadipkarmakar335@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button variant="ghost" size="icon" className="hover:bg-primary/20">
    <Mail className="h-6 w-6" />
  </Button>
</a>

</div>

          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional portrait"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl lightning-glow"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;