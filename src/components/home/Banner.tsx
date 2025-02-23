"use client"
// import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";
import img from '@/assets/copy.jpg'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import DownloadButton from "./DownloadButton";

const Banner = () => {
    return (
        <div
            className="
    flex flex-col lg:flex-row py-12 lg:py-24  gap-16 px-10 lg:px-20 justify-center items-center lg:max-w-7xl mx-auto "
        >
            <div className="flex-1  text-white rounded-xl  ">
                <motion.h2
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-4xl lg:text-6xl font-extrabold leading-tight "
                >

                    <span className="bg-gradient-to-r from-[#31ffcc]  to-[#32ccff] bg-clip-text  font-extrabold text-transparent ">
                        Alamin Sujon
                    </span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Mern Stack Developer ',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Full Stack Developer ',
                            2000,
                            'Back End Developer ',
                            2000,
                            'Front End Developer',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />

                    <p className="text-sm font-medium mt-6">
                        +8801997421498 | alsujon2001@gmail.com
                    </p>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="text-slate-300 mt-6 lg:w-3/4"
                >
                    I am a passionate and dedicated Front-End Developer with a knack for
                    creating intuitive and dynamic user experiences with a strong
                    foundation in HTML, CSS, and JavaScript, React and Next js
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="flex gap-5 items-center mt-6"
                >
                    <DownloadButton />
                    <Link href={'/contact'}
                        className="relative py-2 px-4 border border-[#31ffcc] text-[#31ffcc] overflow-hidden
                       before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#31ffcc]
                       before:transition-all before:duration-500 hover:before:w-full hover:text-black"
                    >
                        <span className="relative z-10 transition-colors duration-500">Hire Me</span>
                    </Link>
                </motion.div>
            </div>
            <div className="">
                {/* <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="h-[410px]  bg-[#31FFCB] shadow-2xl w-[410px] rounded-full border-2 border-[#32ffcc]"
                >
                    <Image
                        src={img}
                        alt="Banner Image"
                        className="rounded-full w-[406px] h-[406px]"
                    // width={350}
                    // height={350}
                    />
                </motion.div> */}
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-[410px] bg-[#31FFCB] shadow-2xl w-[410px] rounded-full border-2 border-[#32ffcc]"
                >
                    <Image
                        src={img}
                        alt="Banner Image"
                        className="rounded-full w-[406px] h-[406px]"
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;
