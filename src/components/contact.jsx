import { useState } from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/Linkedin.svg";
import Gmail from "../assets/gmail.svg";

export default function Contact() {
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
        <form
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-lg px-4 py-2 bg-indigo-950 text-white border border-indigo-700"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="rounded-lg px-4 py-2 bg-indigo-950 text-white border border-indigo-700"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="How can I help you?"
            className="rounded-lg px-4 py-2 bg-indigo-950 text-white border border-indigo-700"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-lg px-6 py-3 transition"
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
            className="transition"
            aria-label="GitHub"
          >
            <img
              src={Github}
              alt="GitHub"
              className="w-8 h-8 grayscale hover:grayscale-0 hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] transition"
            />
          </a>
          <a
            href="https://linkedin.com/in/swastik-mohanty-420b41252/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
            aria-label="LinkedIn"
          >
            <img
              src={Linkedin}
              alt="LinkedIn"
              className="w-8 h-8 grayscale hover:grayscale-0 hover:drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition"
            />
          </a>
          <a
            href="mailto:swastikmohanty124@gmail.com"
            className="transition"
            aria-label="Gmail"
          >
            <img
              src={Gmail}
              alt="Gmail"
              className="w-8 h-8 grayscale hover:grayscale-0 hover:drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)] transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
