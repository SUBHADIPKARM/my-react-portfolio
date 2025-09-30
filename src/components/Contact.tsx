import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formDataObj = new FormData(e.target as HTMLFormElement);

    const response = await fetch("https://formspree.io/f/xyznelre", {
      method: "POST",
      body: formDataObj,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

  return (
  <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
  <div className="container mx-auto px-6">
    
    {/* Heading & description ABOVE the card */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-2 gradient-text">
        Get in Touch
      </h2>
      <p className="text-lg text-muted-foreground">
        Send Details To Contact Me
      </p>
    </div>

    <div className="grid md:grid-cols-1 xl:grid-cols-1 gap-8">
      {/* Contact Card */}
      <div className="card-lightning relative group p-8 rounded-xl bg-white shadow-lg cursor-pointer
                      hover:scale-105 transition-transform duration-300
                      before:absolute before:inset-0 before:rounded-xl before:bg-blue-500/20 before:blur-xl before:opacity-0
                      group-hover:before:opacity-100 before:pointer-events-none">

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-primary hover:bg-blue-50 transition-colors duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-primary hover:bg-blue-50 transition-colors duration-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-primary hover:bg-blue-50 transition-colors duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-primary hover:bg-blue-50 transition-colors duration-300"
          ></textarea>

          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {status === "success" && (
          <p className="text-green-600 mt-4 text-center">
            Message sent successfully ✅
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 text-center">
            Oops! Something went wrong.
          </p>
        )}
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
