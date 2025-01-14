import React from 'react'
import { BiCodeBlock, BiCoinStack, BiCross, BiSolidBookContent } from 'react-icons/bi'

function About() {
  return (
    <>
      {/* About Me Section */}
      <section id="aboutus" className="h-full w-full mt-20 md:mt-6 lg:mt-2 text-white">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl text-center font-bold">About Me</h1>
          <BiCross className="animate-spin text-5xl absolute -bottom-10 right-10" />
        </div>
        <p className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 my-10 m-auto text-base text-center">
          I am an aspiring Data Scientist with a skills in Python, SQL, Excel and data visualization tools like Power BI and Tableau. My passion lies in analyzing complex datasets to uncover meaningful patterns, create interactive dashboards, and deliver data-driven insights that support strategic decisions.
          <br />
          <br/>
          In addition, I possess foundational knowledge of web technologies such as HTML, CSS, React, and GitHub, enabling me to integrate data solutions into interactive applications.
          <br />
          <br />
          As a fresher, I bring enthusiasm, adaptability, and a problem-solving mindset to collaborative environments, aiming to contribute innovative and impactful solutions to real-world challenges.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-full w-full mt-20 md:mt-6 lg:mt-2 text-white">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl text-center font-bold py-3">Skills</h1>
          <BiCross className="animate-spin text-5xl absolute -bottom-10 right-10" />
        </div>

        {/* Skills Cards */}
        <div className="min-h-60 w-full lg:w-11/12 m-auto flex flex-wrap justify-around items-center">
          <div className="h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-900">
            <BiCodeBlock className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
            <h2 className="text-lg md:text-xl text-center font-semibold py-2">Data Analyst</h2>
            <p className="text-xs sm:text-sm px-1 text-gray-300 text-center">
              Skilled in Python, SQL, Power BI, and Excel, transforming raw data into actionable insights and creating impactful visualizations.
            </p>
          </div>
          <div className="h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-800">
            <BiCoinStack className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
            <h2 className="text-lg md:text-xl text-center font-semibold py-2">Data Science</h2>
            <p className="text-xs sm:text-sm px-1 text-gray-300 text-center">
              Proficient in Python libraries, MySQL, Machine Learning, and data visualization, leveraging analytics to uncover insights and drive decisions.
            </p>
          </div>
          <div className="h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-900">
            <BiSolidBookContent className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
            <h2 className="text-lg md:text-xl text-center font-semibold py-2">Web Development</h2>
            <p className="text-xs sm:text-sm px-1 text-gray-300 text-center">
              Basic Knowledge of web technologies such as HTML, CSS, React, TailwindCSS, Django, and Bootstrap for designing clean and user-friendly websites.
            </p>
          </div>
        </div>


        <div className="relative">
          <h1 className="text-4xl md:text-5xl text-center font-bold py-5">Internships</h1>
          <BiCross className="animate-spin text-5xl absolute -bottom-10 right-10" />
        </div>

        {/* Skills Cards */}
        <div className="min-h-60 w-full lg:w-11/12 m-auto flex flex-wrap justify-around items-center">
          <div className="h-48 w-72 sm:h-56 lg:h-80 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 rounded-lg shadow-xl shadow-gray-900">
            <BiCodeBlock className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
            <h2 className="text-lg md:text-xl text-center font-semibold py-2">Unified Mentors</h2>
            <p className="text-xs sm:text-sm px-1 text-gray-300 text-center">
            Internship focusing on data analysis,mainly used power BI & Jupyter Notebook in projects "FIFA WORLD CUP ANALSIS" and "ENTERTAINMENT DATA ANALYSIS" </p>
            <div className="flex justify-center items-center my-6">
              <a
                href="https://unifiedmentors.tiiny.site"
                className="btn h-8 w-24 pt-1.5 text-sm text-center hover:bg-pink-600 hover:shadow-pink-500/50 border-2 border-white hover:shadow-lg hover:scale-105 shadow-lg shadow-gray-900 text-white rounded-full"
              >
                View
              </a>
            </div>
          </div>
          <div className="h-48 w-72 sm:h-56 lg:h-80 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 rounded-lg shadow-xl shadow-gray-800">
            <BiCoinStack className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
            <h2 className="text-lg md:text-xl text-center font-semibold py-2">InternPe</h2>
            <p className="text-xs sm:text-sm px-1 text-gray-300 text-center">
            At InterPe, where I contributed to developing a Tic-Tac-Toe game as part of an internship project. Gained experience in coding, problem-solving using Python.</p>

            <div className="flex justify-center items-center my-6">
              <a
                href="https://drive.google.com/file/d/1Nd-tCDBciJ7dXeget30xUWOkji7IiaGs/view"
                className="btn h-8 w-24 pt-1.5 text-sm text-center hover:bg-pink-600 hover:shadow-pink-500/50 border-2 border-white hover:shadow-lg hover:scale-105 shadow-lg shadow-gray-900 text-white rounded-full"
              >
                View
              </a>
            </div>
          </div>


          <div className="h-48 w-72 sm:h-56 lg:h-80 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 rounded-lg shadow-xl shadow-gray-900">
            <BiSolidBookContent className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
            <h2 className="text-lg md:text-xl text-center font-semibold py-2">Sabudh Foundation</h2>
            <p className="text-xs sm:text-sm px-1 text-gray-300 text-center">
            Currently interning as a Data Scientist at Sabudh Foundation. Involved in data analysis, model development, and insights generation, data-driven strategies</p>
          
            <div className="flex justify-center items-center my-6">
              <a
                href="https://sabudhOfferLetter.tiiny.site"
                className="btn h-8 w-24 pt-1.5 text-sm text-center hover:bg-pink-600 hover:shadow-pink-500/50 border-2 border-white hover:shadow-lg hover:scale-105 shadow-lg shadow-gray-900 text-white rounded-full"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
