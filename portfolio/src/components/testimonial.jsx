export default function Testimonial() {
  return (
    
      <div id="testimonials" className="bg-indigo-800 m-20 max-w-full rounded-3xl p-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-white-300">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Highlighted Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2 text-gray-700">Advanced Keylogger</h4>
              <p className="text-gray-600">
                Python-based system monitoring tool integrating keylogging, clipboard/data capture, audio recording, and screenshot automation. Demonstrated cybersecurity vulnerabilities in Windows environments. Automated secure logging with multi-module integration.
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2 text-gray-700">Travelocity Website Clone</h4>
              <p className="text-gray-600">
                Developed a responsive and user-friendly interface using React, HTML, and CSS. Utilized React's component-based architecture for reusable UI components. Integrated React Router for seamless navigation.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Achievements</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Participated in SIH 2024</li>
            <li>Participated in HACK-O-12 (Hackathon) by ISTE SILICON CHAPTER 2024</li>
            <li>NPTEL Certification on Social Networks</li>
            <li>Played Kho-Kho at National level</li>
          </ul>
        </div>
      </div>
  );
}
