import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Instagram from '../assets/instagram.svg'
import Ppic from '../assets/pic.jpeg'
import Gmail from '../assets/gmail.svg'

const hero = () => {
return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                    <p className='text-4xl mb-5 text-slate-300'>I'm</p>
                    <h1 className='text-6xl'>Swastik Kumar Mohanty</h1>
                    <hr />
                    <p className='mt-10 text-slate-300 font-sans'>
                            A Electronics & Instrumentation Engineering student passionate about cybersecurity, with hands-on experience in programming, network fundamentals, and web development. Skilled in solving complex challenges through projects and continuous learning. Committed to contributing to a secure digital world by adapting and growing with evolving technologies.
                    </p>
            </div>
            <div className='w-1/3 items-center ssm:w-fit'>
                    <img src={Ppic} alt="Profile Picture" width={250} height={250} className='rounded-full w-full border-8 border-white ' />
            </div>
            <div className='w-1/3 ssm:w-fit ml-20'>
                    {/* <p className='text-4xl mb-4'>About Me</p>
                    <p className='text-slate-300'>
                            Let's build quality in programming as design with our services
                    </p> */}
                    <a href="/Swastik_Kumar_Mohanty.pdf" download="Swastik_Kumar_Mohanty_Resume.pdf" className='cursor-pointer'>
                        <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                            About Me
                        </button>
                    </a>

                    <div className='flex mt-5 space-x-4 cursor-pointer'>
                            <a href="https://github.com/Swastik124" target="_blank"><img src={GitHub} alt="GitHub" size={40}/></a>
                            <a href="https://www.linkedin.com/in/swastik-mohanty-420b41252/" target="_blank"><img src={LinkedIn} alt="LinkedIn" size={40}/></a>
                            <a href="mailto:swastikmohanty124@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Gmail} alt="Gmail" size={40}/></a>
                    </div>
            </div>
    </section>
)
}

export default hero