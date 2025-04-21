export default function Testimonial() {
  return (
    <div
      id="testimonials"
      className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto p-4 md:p-10 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-white from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide border-b-4 border-indigo-500 pb-2 inline-block">
            Testimonials
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6 mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-white text-center">
            Highlighted Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold mb-2 text-indigo-200 text-center">
                Advanced Keylogger
              </h4>
              <p className="text-slate-200 text-sm md:text-base text-justify">
                Python-based system monitoring tool integrating keylogging, clipboard/data capture, audio recording, and screenshot automation. Demonstrated cybersecurity vulnerabilities in Windows environments. Automated secure logging with multi-module integration.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold mb-2 text-indigo-200 text-center">
                Smart Cafeteria System
              </h4>
              <p className="text-slate-200 text-sm md:text-base text-justify">
                A smart cafeteria ordering system using ESP32, Bluetooth, and WiFi that allows users to place orders via Bluetooth commands and view real-time updates on a web interface. Orders are logged on an SD card, and the menu is dynamically loaded from a JSON file.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white text-center">
            Achievements
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-slate-200">
            <li className="flex">
              <span className="mr-2">•</span>
              <span>Participated in SIH 2024 (Smart India Hackathon) and HACK-O-12 Hackathon, organized by ISTE Silicon Chapter in 2024.</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>Completed the Ethical Hacking course on Udemy, certified by Z-Security.</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>Awarded the Ethical Hacking Bootcamp Certificate from IIIT Bhubaneswar under the ISEA Project Phase 3, supported by MeitY.</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>Completed an NPTEL certification course on Social Networks.</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>KVS National-level Kho-Kho Player.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
