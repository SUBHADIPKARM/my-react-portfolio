import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
     {
      title: "Field Tech Executive",
      company: "Kamarta Robotics Technology & Automation Pvt.Ltd",
      period: "2025 - PRESENT",
      location: "Remote",
      type: "Full Time",
      description: "Create and maintain technical documentation,manuals and logs , Install and configure network hardware and software.",
      achievements: [
        "Recognized for quick learning and adaptability in handling technical issues during live projects.",
        "Contributed to a team project improving system performance during training. ",
        "Achieved 95% positive feedback for technical support provided during internship"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "PHP"]
    },
    {
      title: "Web Devolapment Intern",
      company: "IGMI Lead Consultancy Pvt.Ltd",
      period: "Feb 2023 - Apr 2023",
      location: "Durgapur,West Bengal",
      type: "Full-time",
      description: "Leading development of scalable web applications using Html, Css , Bootstrap, PHP and cloud technologies.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Successfully contributing to an ongoing live project by fixing bugs, adding small features, or optimizing code.",
        "Building Personal Projects with Company Stack"
      ],
      technologies: ["Html", "Css", "Js", "Bootstrap", "PHP", "MySQL"]
    },
    {
      title: "Frontend Developer",
      company: "Flying Pigeon Solution",
      period: "Sep 2024 - Nov 2024",
      location: "Jaipur,Rajasthan",
      type: "Part-time",
      description: "Developed responsive web applications and mobile-first designs. ",
      achievements: [
        "Developed and deployed 2+ responsive web applications using HTML, CSS, JavaScript, and React.js.",
        "Built a portfolio website showcasing projects and coding skills, optimized for both desktop and mobile.",
        "Contributed to open-source frontend projects on GitHub."
      ],
      technologies: ["Html", "Css", "Js", "Bootstrap", "PHP", "MySQL"]
    },
   
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles and the impact I've made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-16 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg pulse-lightning"></div>
                
                <div className="card-lightning rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-xl text-primary font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;