import { useState } from "react";
import Github from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import Gmail from "../assets/gmail.svg";

export default function ContactSection() { 
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "a1ab2ab2-efd0-4ecf-9c6e-8e4d9b370532");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      setSuccess(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="py-24 bg-indigo-900 min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Contact Me</h2>
        
        {/* Contact Form */}
        <form
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-lg px-4 py-2 bg-indigo-950 text-white border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="rounded-lg px-4 py-2 bg-indigo-950 text-white border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="How can I help you?"
            className="rounded-lg px-4 py-2 bg-indigo-950 text-white border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

          {success && (
            <p className="text-green-400 text-center mt-4">
              Thank you! Your message has been sent.
            </p>
          )}

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/Swastik124"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <img
              src={Github}
              alt="GitHub"
              className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
          <a
            href="https://linkedin.com/in/swastik-mohanty-420b41252/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
          <a
            href="mailto:swastikmohanty124@gmail.com"
            className="transition-transform hover:scale-110"
            aria-label="Email"
          >
            <img
              src={Gmail}
              alt="Email"
              className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
