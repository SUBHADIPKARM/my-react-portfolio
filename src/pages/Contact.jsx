import { useState } from "react";
import { Button } from "@/components/ui/button";


const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xyznelre", { 
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Get in Touch</h2>

       <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-lg bg-blue-200 text-black placeholder-black focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-lg bg-blue-200 text-black placeholder-black focus:ring-2 focus:ring-primary"
            />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full px-4 py-2 border rounded-lg bg-blue-200 text-black placeholder-black focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border rounded-lg bg-blue-200 ./text-black placeholder-black focus:ring-2 focus:ring-primary"
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
    </section>
  );
};


export default Contact;
