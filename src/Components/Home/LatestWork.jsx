import React from 'react';
import { BiCircle, BiStar } from 'react-icons/bi';
import project1 from '../../assets/Amazon_dashboard.png';
import project2 from '../../assets/Delicious food.jpg';
import project3 from '../../assets/currencyConvertor.png';
import project4 from '../../assets/Portfolio.png';
import project5 from '../../assets/Django_api_auth.png';
import project6 from "../../assets/dataManagement.png";
import project7 from "../../assets/FlipMart_sales.png";
import project8 from "../../assets/Pizza_sales_database.png";

function LatestWork() {
  return (
    <div id="latestwork" className="relative m-auto mt-10 mb-2">
      <div className="m-auto text-center relative">
        <h1 className="text-3xl md:text-5xl font-semibold py-7">My Work</h1>
        <BiStar className="animate-spin text-2xl absolute bottom-0" />
      </div>
      <BiCircle className="text-5xl animate-pulse absolute bottom-0 right-10" />
      <BiCircle className="text-4xl animate-pulse absolute bottom-6 right-10" />

      <div className="min-h-96 w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start">
        {/* First Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-16 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project1} alt="YouTube Clone" />
          </a>
          <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Amazon Dashboard</h1>
            <p>
              The Amazon Prime Video Dashboard, created using Power BI, provides a comprehensive analysis of titles, genres, ratings, and global distribution
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/Amazon_PrimeVideo_Dashboard.git"
                className="h-8 w-24 pt-1.5 text-sm text-center bg-pink-600 btn rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project2} alt="Expense Tracker" />
          </a>
          <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Delicious Food Order</h1>
            <p>This is a web application built with React.js and Tailwind.css, designed for users to easily browse and order food online.</p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/Delicious-Food-online-food-order-.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600  rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project4} alt="Portfolio Website" />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Portfolio Website</h1>
            <p>
              A fully responsive portfolio built with React.js and Tailwind CSS. Showcases my projects and includes a
              section highlighting my skills.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/React-Portfolio.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600  rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project3} alt="Currency Converter" />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Virat Kohli Cricket Career(2008-2022)</h1>
            <p>
            An interactive Power BI dashboard showcasing Virat Kohli’s T20 and ODI performance from 2008 to 2022. 
            It visualizes key statistics runs, centuries, and match details.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/virat_kohli_cricketCareer_Dashboard.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600  rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href=" " className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project5} alt="Currency Converter" />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Django Rest API</h1>
            <p>
            I developed a Django REST API that interacts with a MySQL database to store and manage company data, implemented authentication and image storage.             </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/Django-Rest-Api.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600 rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>



        {/* Fourth Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project6} alt="Currency Converter" />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Student Database Management using OOP (CRUD Operations)</h1>
            <p>
            I developed a Student Database Management System using Object-Oriented Programming (OOP) principles in Python.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/Student_dataBase.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600 rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>


        {/* Fourth Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project7} alt="Currency Converter" />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">FlipMart Sales Dashboard</h1>
            <p>
            The FlipMart Sales Dashboard provides a concise overview of key business metrics. Using technology Excel, PowerBi for analysis
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/FlipMart-Sales-Dashboard.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600 rounded-full"
              >
                View Code
              </a>
              
            </div>
          </div>
        </div>



        {/* Fourth Project */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg" src={project8} alt="Currency Converter" />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Pizza Sales</h1>
            <p>
            I developed a SQL project focused on analyzing pizza sales using MySQL.Through optimized queries and efficient joins, 
            I was able to extract meaningful insights from the data
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/SimranKodwani-2003/pizza_sales_Query.git"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-pink-600 rounded-full"
              >
                View Code
              </a>
            
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default LatestWork;
