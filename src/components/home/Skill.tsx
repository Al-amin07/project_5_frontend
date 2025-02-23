import Marquee from "react-fast-marquee";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
    return (
        <div
            id="skills"
            className="mt-16 rounded-lg bg-transparent shadow-custom-2 hover:shadow-[#31ffcc]  px-8 max-w-7xl mx-auto py-12"
        >

            <h2 className="text-3xl font-bold text-gray-50 text-center mb-3">
                Skills & Expertise
            </h2>
            <p className="text-lg text-center text-gray-300 mb-10">
                Technologies and frameworks I leverage to build exceptional web
                experiences.
            </p>

            <Marquee pauseOnClick={true} speed={100}>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <SiHtml5 className="h-16 w-16 text-orange-600" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">
                        HTML
                    </h1>
                </div>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <IoLogoCss3 className="h-16 w-16 text-blue-500 " />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">
                        CSS
                    </h1>
                </div>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <RiTailwindCssFill className="h-16 w-16 text-blue-400" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">
                        Tailwind
                    </h1>
                </div>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <IoLogoJavascript className="h-16 w-16 text-yellow-400" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">
                        Java Script
                    </h1>
                </div>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <FaReact className="h-16 w-16 text-blue-600" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">
                        React
                    </h1>
                </div>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <SiTypescript className="h-16 w-16 text-blue-500" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">
                        Type Script
                    </h1>
                </div>






                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <FaNodeJs className="h-16 w-16 text-emerald-600" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">Node Js</h1>

                </div>
                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">
                    <RiFirebaseFill className="h-16 w-16 text-yellow-500" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">Firebase</h1>

                </div>

                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">

                    <TbBrandNextjs className="h-16 w-16 text-blue-400" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">Next js</h1>

                </div>

                <div className="space-y-4  px-6 rounded-xl py-6 flex flex-col items-center  w-[200px] border-y border-y-[#31ffcc] text-[#31ffcc] shadow-lg shadow-[#31ffcc]  hover:scale-95 mr-10">

                    <DiMongodb className="h-16 w-16  text-emerald-600" />
                    <h1 className="text-xl text-slate-100 font-semibold uppercase">Mongo Db</h1>

                </div>
            </Marquee>

            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">


     

     
       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
        <img className="h-20 w-20" src="/html.png" alt="" />
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">Html</h1>
        
       </div>


       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
        <img className="h-20 w-20" src="/css-3.png" alt="" />
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">css</h1>
      
       </div>

   
       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
      
        <RiTailwindCssFill className="h-20 w-20 text-blue-400"/>
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">Tailwind</h1>
       
       </div>

     
       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
  
        <img className="h-20 w-20 bg-orange-500" src="/js.png" alt="" />
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">Java script</h1>
       
       </div>

      

       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
        <img className="h-20 w-20" src="/react.png" alt="" />
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">React</h1>
      
       </div>
       
       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
        
        <FaNodeJs className="h-20 w-20 text-emerald-600"/>
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">Node Js</h1>
        
       </div>

       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">

        <TbBrandNextjs className="h-20 w-20 text-blue-400"/>
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">Next js</h1>
     
       </div>
   
       <div className="space-y-4 px-6 rounded-xl py-6 flex flex-col items-center bg-gradient-to-t from-cyan-600 to-cyan-800 hover:border-2 hover:scale-105">
       
        <DiMongodb className="h-20 w-20 text-emerald-600"/>
        <h1 className="text-2xl text-slate-100 font-semibold uppercase">Mongo Db</h1>
       
       </div>
      </div> */}
        </div>
    );
};

export default Skills;
