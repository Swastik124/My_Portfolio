import Keylogger from '../assets/keylogger.png'
import Travelocity from '../assets/Travelocity.svg'
import Food from '../assets/food.svg'
import Key from '../assets/key.png'

export default function Project() {
  return (
    <div className="bg-black min-h-screen py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 border-b-4 border-indigo-500 inline-block pb-2">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 text-center">
                <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold mb-2">
                  Advanced Keylogger
                </div>
                <a
                  href="https://github.com/Swastik124/Advanced_Keylogger.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 underline"
                >
                  View Project
                </a>
                <p className="mt-2 text-slate-200">
                  This project is a Python-based keylogger that collects keystrokes, clipboard data, system information, microphone audio, and screenshots. The collected data is encrypted using the cryptography library and sent securely via email for analysis. It is designed for educational purposes and cybersecurity research.
                </p>
              </div>
              <img
                src={Keylogger}
                alt="Advanced Keylogger Project"
                width={120}
                height={120}
                className="ml-0 md:ml-6 mt-6 md:mt-0 rounded-xl"
              />
            </div>
          </div>
          {/* Project 2 */}
          <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={Key}
                alt="Simple Keylogger"
                width={120}
                height={120}
                className="mr-0 md:mr-6 mb-6 md:mb-0 rounded-xl"
              />
              <div className="flex-1">
                <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold mb-2">
                  Simple Keylogger
                </div>
                <a
                  href="https://github.com/Swastik124/Simple_Keylogger.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 underline"
                >
                  View Project
                </a>
                <p className="mt-2 text-slate-200">
                A simple keylogger in Python using pynput that records keystrokes and saves them to log.txt. It handles special keys like space and enter while running in the background. For educational and ethical use only. 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold mb-2">
                  Smart Cafeteria System
                </div>
                <a
                  href="https://github.com/Swastik124/speech-to-text-transcription.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 underline"
                >
                  View Project
                </a>
                <p className="mt-2 text-slate-200">
                  A smart cafeteria ordering system using ESP32, Bluetooth, and WiFi that allows users to place orders via Bluetooth commands and view real-time updates on a web interface. Orders are logged on an SD card, and the menu is dynamically loaded from a JSON file. 🚀
                </p>
              </div>
              <img
                src={Food}
                alt="Smart Cafeteria System Project"
                width={120}
                height={120}
                className="mr-0 md:mr-6 mb-6 md:mb-0 rounded-xl"
              />
            </div>
          </div>
          {/* Project 4 */}
          <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={Travelocity}
                alt="Travelocity Web Application"
                width={120}
                height={120}
                className="mr-0 md:mr-6 mb-6 md:mb-0 rounded-xl"
              />
              <div className="flex-1">
                <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold mb-2">
                  Travelocity Web Application
                </div>
                <a
                  href="https://github.com/Swastik124/Travelocity-Web-Application.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 underline"
                >
                  View Project
                </a>
                <p className="mt-2 text-slate-200">
                This project employs technologies such as HTML, CSS, JavaScript, and relevant frameworks (React+Vite) to mimic real-world functionalities. It serves as an educational resource and a portfolio piece to showcase the ability to recreate complex, real-world web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
