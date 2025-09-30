import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { useState } from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "Certificate on Web Devolapment Tranning from Internshala Trainings.",
      issuer: "Web Development",
      date: "2023",
      credentialId: "hc8h0xzw49u",
      description: "The training consisted of HTML, CSS, Bootstrap, DBMS, PHP, JS, React, and Final Project modules.",
      skills: ["HTML", "CSS", "Bootstrap", "DBMS", "PHP", "JS", "React"],
      verifyUrl: "https://trainings.internshala.com/view_certificate/5C19355E-21BC-3628-DF23-3F466EFF9EA1/hc8h0xzw49u/"  
    },
    {
      title: "Certificate on IBM Cloud Fundamental from IBM Developer Skills Network",
      issuer: "Cloud Computing",
      date: "2025",
      credentialId: "901da11e411e4877a3f6900ce6203f81",
      description: "A course on jecrc.skillsnetwork.site Powered by IBM Developer Skills Network.",
      skills: [" Cloud Computing"],
      verifyUrl: "https://courses.jecrc.skillsnetwork.site/certificates/901da11e411e4877a3f6900ce6203f81#"  
    },
    {
      title: "Certificate on JavaScript from IBM Developer Skills Network",
      issuer: "Javascript",
      date: "2024",
      credentialId: "5895e12bbab54d9182c989a950dd454f",
      description: "A course on jecrc.skillsnetwork.site Powered by IBM Developer Skills Network.",
      skills: ["JavaScript"],
      verifyUrl: "https://courses.jecrc.skillsnetwork.site/certificates/5895e12bbab54d9182c989a950dd454f"
    },
    {
      title: "Certificate on NodeJs from IBM Developer Skills Network",
      issuer: "NodeJs",
      date: "2024",
      credentialId: "0ca9f6edb09a47c988cca48066eba4cc",
      description: "A course on jecrc.skillsnetwork.site Powered by IBM Developer Skills Network.",
      skills: ["NodeJs"],
      verifyUrl: "https://courses.jecrc.skillsnetwork.site/certificates/0ca9f6edb09a47c988cca48066eba4cc"
    },
    {
      title: "Certificate on Spring Framework from IBM Developer Skills Network",
      issuer: "Spring Framework",
      date: "2025",
      credentialId: "db3c78f46a9e460e9e10d72a6fea644c",
      description: "A course on jecrc.skillsnetwork.site Powered by IBM Developer Skills Network.",
      skills: ["Spring Framework"],
      verifyUrl: "https://courses.jecrc.skillsnetwork.site/certificates/db3c78f46a9e460e9e10d72a6fea644c"
    },
    {
      title: "Certificate on Web Services from IBM Developer Skills Network",
      issuer: "Web Services",
      date: "2025",
      credentialId: "50fa13d34cb549299f6ef425ea9cf63e",
      description: "A course on jecrc.skillsnetwork.site Powered by IBM Developer Skills Network.",   
       skills: ["Web Services"],
      verifyUrl: "https://courses.jecrc.skillsnetwork.site/certificates/50fa13d34cb549299f6ef425ea9cf63e"
    }
  ];

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate emailjs, nodemailer API, or Formspree here
    alert(`Message Sent!\n\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <div key={index} className="card-lightning rounded-xl p-8 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/20"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  Issued {cert.date}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-xs text-muted-foreground mb-2">
                  Credential ID: {cert.credentialId}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="text-xs bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2"/>
                  Verify Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Certificates;
