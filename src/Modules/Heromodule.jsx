import React from 'react';
import '../styles/reset.css';
import logo from '../assets/logo.png'
import pic from '../assets/Profilepic.png'
import Aboutme from '../Components/Aboutme';
import Latestworks from '../Components/Latestworks';
import Logo from '../Components/Logo';
import Phoneicon from '../Components/Phoneicon';
import Whatsappicon from '../Components/Whatsappicon';
import LogoImage from '../Components/LogoImage';
import Linkedinlogo from '../Components/Linkedinlogo';
import Twitterlogo from '../Components/Twitterlogo';
import Instagramlogo from '../Components/Instagramlogo';
import Maillogo from '../Components/Maillogo';
import Githublogo from '../Components/Githublogo';
import ParticlesComponent from '../Components/ParticlesComponent';
import 'animate.css';

const Heromodule = () => {
  const handleClick = () => {
    // Your button click logic here (e.g., changing state)
    console.log("Button clicked!");
  };
  return (
    <>
      <ParticlesComponent />
      <div className="h-screen w-screen m-0 p-0 text-white font-nunito">
        <section className='flex flex-col justify-between h-screen'>
          <header className='flex justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto'>
            <Logo />
            <div className='flex items-center gap-4 mx-4 mt-4'>
              <Phoneicon />
              <Whatsappicon />
            </div>
          </header>
          <div className='flex -mt-10 relative'>
            <div className='w-full h-full max-w-5xl mx-auto overflow-hidden'>
              {/* Text section */}
              <div className="relative">
                <div className="animate__animated animate__bounceInDown">

                <h1 className='sm:text-[64px] text-[40px] font-spartan font-semibold whitespace-nowrap'>Jimil <span
                  className="bg-gradient-to-l  bg-clip-text text-transparent border border-transparent"
                  style={{
                    WebkitTextStroke: '2px #fff', // This is for the text outline
                  }}
                >Soni</span></h1>
                <p className='font-merriweather italic text-sm mb-8'>MERN Stack Developer</p>
                </div>
                <Aboutme />
              </div>
              <LogoImage />
            </div>
            <ul className="ml-auto space-y-6 cursor-pointer absolute right-8 border-0 md:border-2 border-[rgba(255,255,255,0.094)] bg-transparent md:bg-[rgba(255,255,255,0.1)] md:backdrop-blur-[10px] p-3 rounded-lg fadeinright max-w-full">
              <li className="hover:scale-125 transition-transform duration-300 ">
                <Linkedinlogo />
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <Twitterlogo />
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <Instagramlogo />
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <Maillogo />
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <Githublogo />
              </li>
            </ul>


          </div>
          <div className='relative self-center after:content-[""] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]'>
            <Latestworks />
          </div>
        </section>
      </div>
    </>
  );
};

export default Heromodule;
