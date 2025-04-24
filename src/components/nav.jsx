import { CgNametag } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    
    <div className="relative bg-indigo-900">
  <div className="absolute inset-0 bg-indigo-900 opacity-60 pointer-events-none"></div>
      
      
      <div className="relative z-10">
        <div className="flex items-center justify-between p-10 lg:flex-row">
          <div>
            <a href="#" className="text-white font-bold text-2xl tracking-wider flex items-center">
              <CgNametag size={40} />
              Crafting Innovation in Tech & Cybersecurity
            </a>
          </div>
          <div className="space-x-4">
            <div className="hidden lg:block space-x-2">
              <a href="#skills" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
              <a href="#projects" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
              <a href="#testimonials" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
              <a href="#contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</a>
            </div>
            <div className="block lg:hidden">
              {toggle ? (
                <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
              ) : (
                <HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        
        <div className="block lg:hidden">
          {toggle ? (
            <div className="flex justify-between ml-10">
              <ul>
                <li className="text-white text-xl mb-2 cursor-pointer ">
                  <a href="#skills" className="hover:text-gray-400">Skills</a>
                </li>
                <li className="text-white text-xl mb-2 cursor-pointer">
                  <a href="#projects" className="hover:text-gray-400">Projects</a>
                </li>
                <li className="text-white text-xl mb-2 cursor-pointer">
                  <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
