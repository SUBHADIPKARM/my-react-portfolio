import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 98 },
        { name: "CSS", level: 92 },
        { name: "React", level: 50 },
        { name: "Bootstrap", level: 80 },
        { name: "JavaScript", level: 95 },
        
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "PHP", level: 88 },
        { name: "Python", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 82 },
        { name: "Node.js", level: 90 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: [
        { name: "Visual Studio Code", level: 92 },
        { name: "Git/GitHub", level: 95 },
        { name: "Node.js", level: 78 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ]
    }
  ];

  const technologies = [
    "React", "Js", "Node.js", "Python", "HTML",
    "CSS","Java","Bootstrap", "PHP","MySQL"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-lightning rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-lg mr-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Globe, number: "5+", label: "Projects Completed" },
            { icon: Zap, number: "1+", label: "Years Experience" },
            { icon: Smartphone, number: "10+", label: "Happy Clients" },
            { icon: Code, number: "10+", label: "Technologies" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;