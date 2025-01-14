import React from 'react'
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import arrowicon from '../../assets/arrow_icon.svg'
import mailicon from '../../assets/mail_icon.svg'
import { Link } from 'react-scroll'
import profile from "../../assets/IMG-20240303-WA0117.jpg"

function Hero() {
  return (
    <div id='home' className='flex flex-col-reverse lg:flex-row justify-around items-center pt-0 sm:pt-10 lg:py-36' >
      {/* Left side */}
      <div className='w-full lg:w-1/2 xl:w-2/5 text-center lg:text-start' >
        <h1 className=' textanimation w-[95%] text-3xl sm:text-3xl md:text-4xl italic font-bold mb-2 ' >I'm<span className='textcolor'> Simran Kodwani</span></h1>
        <h1 className='w-[95%] text-3xl sm:text-2xl md:text-4xl font-bold mb-4 ' ><br /> Aspiring Data Scientist</h1>
        <p className='text-sm md:w-10/12 m-auto lg:w-auto text-gray-300 text-left' style={{ fontFamily: 'Poppins, sans-serif' }}>
        Driven Data Scientist skilled in Python, Pandas, NumPy, Matplotlib, Seaborn, Excel and Machine learning techniques. Proficient in data visualization using Jupyter Notebook, Power BI and Tableau, having basic knowledge of React.js, HTML5, CSS, Django and GitHub for creating interactive data-driven applications.        </p>

        {/* LinkedIn & Github logo */}
        <div className='w-full flex justify-center lg:justify-start items-center mt-4' >
          <a href="https://www.linkedin.com/in/simran-kodwani-46ab70270">
            <BiLogoLinkedin className='text-2xl' />
          </a>
          <a href="https://github.com/SimranKodwani-2003">
            <BiLogoGithub className='text-2xl mx-2' />
          </a>
        </div>

        {/* Contact me button */}
        <div className='w-full' >
          <Link to='contact' smooth={true} offset={-80} duration={500} className='btn h-10 w-36 mt-5 m-auto lg:ml-0 rounded-md flex justify-center items-center text-base font-semibold bg-pink-700 text-white cursor-pointer' >Contact Me <BiArrowBack className='text-xl font-bold ml-2' /> </Link>
        </div>

      </div>

      {/* Right Side */}
      <div className='h-full w-full sm:w-2/3 lg:w-1/2 flex justify-between sm:mb-4 lg:mb-0' >
        <div className='h-0 w-0 sm:h-72 sm:w-20 lg:h-96 relative' >
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute top-0 ' src={arrowicon} alt="" />
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute bottom-20 ' src={mailicon} alt="" />
        </div>
        <div className='p-9h-80 lg:h-[28rem] w-[80%] relative flex justify-center items-center'>
        <img 
className='py-5 h-full w-full sm:h-80 lg:h-[26rem] sm:w-80 lg:w-[26rem] absolute object-cover lg:bottom-16 rounded-full bg-gray-400 border-4 border-pink-600'
src={profile} 
          alt="" 
        />
      </div>


        <div className='h-0 w-0 sm:h-72 sm:w-20 lg:h-96 relative' >
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute top-4 right-10 ' src={mailicon} alt="" />
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute -bottom-4 right-20 ' src={arrowicon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero