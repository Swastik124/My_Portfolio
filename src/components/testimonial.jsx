export default function Testimonial() {
  return (
    <div
      id="testimonials"
      className="bg-indigo-800 m-4 md:m-20 max-w-full rounded-3xl p-4 md:p-10 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-white from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 tracking-wide border-b-4 border-indigo-500 pb-2 mb-6">Testimonials</h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
          Highlighted Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h4 className="text-base md:text-lg font-bold mb-2 text-gray-700">
              Advanced Keylogger
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Python-based system monitoring tool integrating keylogging, clipboard/data capture, audio recording, and screenshot automation. Demonstrated cybersecurity vulnerabilities in Windows environments. Automated secure logging with multi-module integration.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h4 className="text-base md:text-lg font-bold mb-2 text-gray-700">
              Smart Cafeteria System
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              A smart cafeteria ordering system using ESP32, Bluetooth, and WiFi that allows users to place orders via Bluetooth commands and view real-time updates on a web interface. Orders are logged on an SD card, and the menu is dynamically loaded from a JSON file.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 md:mt-10 bg-white shadow-md rounded-lg p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
          Achievements
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
          <li>Participated in SIH 2024</li>
          <li>Participated in HACK-O-12 (Hackathon) by ISTE SILICON CHAPTER 2024</li>
          <li>NPTEL Certification on Social Networks</li>
          <li>Played Kho-Kho at National level</li>
        </ul>
      </div>
    </div>
  );
}
