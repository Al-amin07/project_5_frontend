import img from '@/assets/copy.jpg'
import Image from 'next/image';
const About = () => {
    return (
        // <section
        //     id="about"
        //     className="py-16 px-4 md:px-12 shadow-custom-2 lg:px-20 my-20 bg-transparent  hover:shadow-[#31ffcc] max-w-7xl mx-auto rounded-lg"
        // >
        //     <div className=" px-6">
        //         <div className="flex flex-col lg:flex-row gap-12 items-center ">
        //             <div className=" hidden lg:flex md:w-4/12  justify-end mb-8 lg:mb-0">
        //                 <Image
        //                     className="rounded-full hover:scale-110 transition-transform duration-700 w-80 h-80 bg-[#31ffcc]  border-4 border-gray-800 object-cover"
        //                     src={img}
        //                     // src="../../assets/copy.jpg"
        //                     alt="Your Name"
        //                 />
        //             </div>
        //             <div className=" flex-1  text-center lg:text-left">
        //                 <h2 className="text-4xl font-semibold text-white ">About Me</h2>
        //                 <div className=" text-center lg:text-left">
        //                     <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
        //                         Hello, I am a passionate web developer – Alamin Sujon. I am
        //                         driven to create beautiful, intuitive, and user-centric web
        //                         applications.
        //                     </p>
        //                     <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
        //                         I have strong skills in modern web development. I am proficient
        //                         with popular libraries and frameworks like React, Tailwind CSS,
        //                         Node.js, Next.js, Express.js, and MongoDB.
        //                     </p>
        //                     <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
        //                         I want to contribute to the field of web development by building
        //                         helpful and efficient web applications that solve complex
        //                         problems. I am always eager to learn new technologies and
        //                         further refine my skills.
        //                     </p>
        //                     <p className="text-lg text-gray-100">
        //                         Let&apos;s collaborate and bring your ideas to life!
        //                     </p>
        //                     <DownloadButton fileUrl='../../assets/Alamin_Mern_Developer.pdf' />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        // <section className="max-w-3xl mx-auto p-6 text-gray-200 dark:text-gray-200">
        //     <h1 className="text-4xl font-bold mb-4">Hey, I&apos;m [Your Name] 👋</h1>
        //     <p className="text-lg mb-4">
        //         I&apos;m a passionate <strong>Frontend Developer</strong> (and aspiring Full Stack Developer) with a knack for crafting seamless and interactive web experiences. With <strong>6 months of hands-on experience</strong> in frontend development, I've worked on building user-friendly interfaces using <strong>React, Next.js, Tailwind CSS, and RTK Query</strong>.
        //     </p>

        //     <h2 className="text-2xl font-semibold mt-6 mb-2">What I Do 🚀</h2>
        //     <ul className="list-disc list-inside mb-4">
        //         <li><strong>Crafting Dynamic Interfaces:</strong> Turning designs into pixel-perfect, responsive, and accessible websites.</li>
        //         <li><strong>Building Scalable Solutions:</strong> From dashboards to web applications, ensuring performance and scalability.</li>
        //         <li><strong>Full-Stack Curiosity:</strong> Exploring backend technologies like <strong>MongoDB and Node.js</strong> to become a well-rounded developer.</li>
        //     </ul>

        //     <h2 className="text-2xl font-semibold mt-6 mb-2">Experience & Projects 💻</h2>
        //     <ul className="list-disc list-inside mb-4">
        //         <li><strong>Worked on a university application backend</strong> – handling data processing and APIs.</li>
        //         <li><strong>Developed a Next.js dashboard</strong> – enabling content management for projects and blogs.</li>
        //         <li><strong>Created a task assignment system</strong> – displaying tasks in a calendar view with real-time updates.</li>
        //     </ul>

        //     <h2 className="text-2xl font-semibold mt-6 mb-2">Tech Stack 🛠️</h2>
        //     <p className="mb-4">
        //         <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS <br />
        //         <strong>State Management:</strong> Redux Toolkit, RTK Query <br />
        //         <strong>Backend (Learning):</strong> Node.js, Express, MongoDB
        //     </p>

        //     <h2 className="text-2xl font-semibold mt-6 mb-2">More About Me 🌍</h2>
        //     <ul className="list-disc list-inside mb-4">
        //         <li><strong>Love clean UI/UX</strong> – because good design is invisible!</li>
        //         <li><strong>Always learning</strong> – currently diving into <strong>Electron.js</strong> to explore desktop app development.</li>
        //         <li><strong>Collaboration-driven</strong> – I thrive in teamwork and believe in writing maintainable, scalable code.</li>
        //     </ul>


        // </section>
        // <section className=" text-white">
        //     <div className="container max-w-5xl px-4 py-12 mx-auto">
        //         <div className="grid gap-4 mx-4 sm:grid-cols-12">
        //             <div className="col-span-12 sm:col-span-3">
        //                 <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
        //                     <h3 className="text-3xl font-semibold">Morbi tempor</h3>
        //                     <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Vestibulum diam nunc</span>
        //                 </div>
        //             </div>
        //             <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        //                 <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
        //                     <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
        //                         <h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
        //                         <time className="text-xs tracking-wide uppercase dark:text-gray-600">Dec 2020</time>
        //                         <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        //                     </div>
        //                     <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
        //                         <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
        //                         <time className="text-xs tracking-wide uppercase dark:text-gray-600">Jul 2019</time>
        //                         <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
        //                     </div>
        //                     <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
        //                         <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
        //                         <time className="text-xs tracking-wide uppercase dark:text-gray-600">Jan 2016</time>
        //                         <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section
            id="about"
            className="py-16 px-4 md:px-12 shadow-custom-2 lg:px-20 my-20 bg-transparent  hover:shadow-[#31ffcc] max-w-7xl mx-auto rounded-lg"
        >
            <div className=" px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center ">
                    <div className=" hidden lg:flex md:w-4/12  justify-end mb-8 lg:mb-0">
                        <Image
                            className="rounded-full hover:scale-105 transition-transform duration-700 w-80 h-80 bg-[#31ffcc]  border-4 border-gray-800 object-cover"
                            src={img}
                            alt="Your Name"
                        />
                    </div>
                    <div className=" flex-1  text-center lg:text-left">
                        <h2 className="text-4xl font-semibold text-white ">About Me</h2>
                        <div className=" text-center lg:text-left">
                            <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
                                Hello, I am a passionate web developer – Alamin Sujon. I am
                                driven to create beautiful, intuitive, and user-centric web
                                applications.
                            </p>
                            <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
                                I have strong skills in modern web development. I am proficient
                                with popular libraries and frameworks like React, Tailwind CSS,
                                Node.js, Next.js, Express.js, and MongoDB.
                            </p>
                            <p className=" my-6  px-3 md:px-5 py-3 rounded-md text-white  bg-gradient-to-r from-slate-700 to-slate-900     mb-6 hover:bg-cyan-500">
                                I want to contribute to the field of web development by building
                                helpful and efficient web applications that solve complex
                                problems. I am always eager to learn new technologies and
                                further refine my skills.
                            </p>
                            <p className="text-lg text-gray-100">
                                Let&apos;s collaborate and bring your ideas to life!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
