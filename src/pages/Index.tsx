import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © Subhadip Karmakar. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Crafted with ⚡ lightning speed and modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;