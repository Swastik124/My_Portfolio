import Keylogger from '../assets/keylogger.png'
import Travelocity from '../assets/Travelocity.svg'
import Food from '../assets/food.svg'

export default function Project() {
return (
    <>
            <div className="bg-indigo-800 m-20 max-w-full rounded-3xl">
                    <div className="grid justify-items-center m-10">
                            <h1 className="text-3xl text-white mt-10">Projects</h1>
                    </div>
                    <div>
                            <div className="grid grid-cols-2 gap-4 p-5">
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                                            <div className="md:flex">
                                                    <div className="p-8">
                                                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                                                    Advanced Keylogger
                                                            </div>
                                                            <a href="https://github.com/Swastik124/Advanced_Keylogger.git" target='_blank'>Keylogger</a>
                                                            <p className="mt-2 text-slate-500">
                                                            This project is a Python-based keylogger that collects keystrokes, clipboard data, system information, microphone audio, and screenshots. The collected data is encrypted using the cryptography library and sent securely via email for analysis. It is designed for educational purposes and cybersecurity research.
                                                            </p>
                                                    </div>
                                                    <div className='md:shrink-0 p-5'>
                                                            <img src={Keylogger} alt="Project1" width={150} height={150}/>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                                            <div className="md:flex">
                                            <div className='md:shrink-0 p-5'>
                                                            <img src={Food} alt="Project1" width={150} height={150}/>
                                                    </div>
                                                    <div className="p-8">
                                                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                                                    Smart Cafeteria System
                                                            </div>
                                                            <a href="https://github.com/Swastik124/speech-to-text-transcription.git" target='_blank'>Speech to Text Transcription</a>
                                                            <p className="mt-2 text-slate-500">
                                                            A smart cafeteria ordering system using ESP32, Bluetooth, and WiFi that allows users to place orders via Bluetooth commands and view real-time updates on a web interface. Orders are logged on an SD card, and the menu is dynamically loaded from a JSON file. 🚀
                                                            </p>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                                            <div className="md:flex">
                                                    <div className="p-8">
                                                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                                                    TraveloCity Clone
                                                            </div>
                                                            <a href="https://github.com/Swastik124/TraveloCity-Clone.git" target='_blank'>TraveloCity</a>
                                                            <p className="mt-2 text-slate-500">
                                                            This project employs technologies such as HTML, CSS, JavaScript, and relevant frameworks (React) to mimic real-world functionalities. It serves as an educational resource and a portfolio piece to showcase the ability to recreate complex, real-world web applications.
                                                            </p>
                                                    </div>
                                                    <div className='md:shrink-0 p-5'>
                                                            <img src={Travelocity} alt="Project1" width={150} height={150}/>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 p-5">
                            </div>
                    </div>
            </div>
    </>
)
}
