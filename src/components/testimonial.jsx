export default function Testimonial() {
  return (
    <div
      id="testimonials"
      className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>


      <div className="relative z-10 w-full max-w-4xl mx-auto p-4 md:p-10 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-white from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 tracking-wide border-b-4 border-indigo-500 pb-2 mb-6">
            Testimonials
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6 mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
            Highlighted Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold mb-2 text-indigo-200">
                Advanced Keylogger
              </h4>
              <p className="text-slate-200 text-sm md:text-base">
                Python-based system monitoring tool integrating keylogging, clipboard/data capture, audio recording, and screenshot automation. Demonstrated cybersecurity vulnerabilities in Windows environments. Automated secure logging with multi-module integration.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold mb-2 text-indigo-200">
                Smart Cafeteria System
              </h4>
              <p className="text-slate-200 text-sm md:text-base">
                A smart cafeteria ordering system using ESP32, Bluetooth, and WiFi that allows users to place orders via Bluetooth commands and view real-time updates on a web interface. Orders are logged on an SD card, and the menu is dynamically loaded from a JSON file.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
            Achievements
          </h3>
          <ul className="list-disc list-inside text-slate-200 space-y-2 text-sm md:text-base">
            <li>Participated in SIH 2024</li>
            <li>Participated in HACK-O-12 (Hackathon) by ISTE SILICON CHAPTER 2024</li>
            <li>NPTEL Certification on Social Networks</li>
            <li>Played Kho-Kho at National level</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
