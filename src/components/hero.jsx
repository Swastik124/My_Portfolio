import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/linkedIn.svg'
import Instagram from '../assets/instagram.svg'
import Ppic from '../assets/pic.jpeg'
import Tryhackme from '../assets/tyrhackme.svg'
import Gmail from '../assets/gmail.svg'
import pdfWeb from '../assets/Swastik_Kumar_Mohanty(Web).pdf'
import pdfCore from '../assets/Swastik_Kumar_Mohanty(CORE).pdf'
import pdfCyber from '../assets/Swastik_Kumar_Mohanty(Cyber).pdf'

const Hero = () => {
  return (
    <section className="relative bg-indigo-900 overflow-hidden">
  <div className="absolute inset-0 bg-indigo-900 bg-opacity-60 pointer-events-none"></div>
      
      {/* Content above overlay */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center p-10 space-y-10 lg:space-y-0 lg:space-x-10 text-white">
        
        <div className="w-full lg:w-1/2">
          <p className="text-4xl mb-5 text-slate-300">I'm</p>
          <div className="inline-block">
            <h1 className="text-6xl">Swastik Kumar Mohanty</h1>
            <hr className="border-t-4 border-indigo-400 w-full mt-2 mb-2" />
          </div>
          <p className="mt-10 text-slate-300 font-sans">
            A Electronics & Instrumentation Engineering student passionate about cybersecurity, with hands-on experience in programming, network fundamentals, and web development. Skilled in solving complex challenges through projects and continuous learning. Committed to contributing to a secure digital world by adapting and growing with evolving technologies.
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-sm text-indigo-200">Primary resume: Web/Frontend. Pick the version that matches the role.</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={pdfWeb}
                download="Swastik_Kumar_Mohanty_Web_Resume.pdf"
                className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-indigo-800 hover:text-white transition-colors duration-200"
              >
                Download Web Resume
              </a>
              <a
                href={pdfCore}
                download="Swastik_Kumar_Mohanty_Core_Resume.pdf"
                className="border border-indigo-200 text-indigo-200 px-6 py-3 rounded-full hover:bg-indigo-800 hover:text-white transition-colors duration-200"
              >
                Core/Electronics Resume
              </a>
              <a
                href={pdfCyber}
                download="Swastik_Kumar_Mohanty_Cyber_Resume.pdf"
                className="border border-indigo-200 text-indigo-200 px-6 py-3 rounded-full hover:bg-indigo-800 hover:text-white transition-colors duration-200"
              >
                Cybersecurity Resume
              </a>
            </div>
          </div>
        </div>
      
        
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
          <img
            src={Ppic}
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full border-8 border-white"
          />
      
          <div className="flex mt-5 space-x-4 cursor-pointer">
            <a href="https://github.com/Swastik124" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub" width={40} height={40} />
            </a>
            <a href="https://www.linkedin.com/in/swastik-mohanty-420b41252/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" width={40} height={40} />
            </a>
            <a href="mailto:swastikmohanty124@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={Gmail} alt="Gmail" width={40} height={40} />
            </a>
            <a href="https://tryhackme.com/p/swastikmohanty12" target="_blank" rel="noopener noreferrer">
              <img src={Tryhackme} alt="Gmail" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

