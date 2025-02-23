const Education = () => {
    return (
        <div
            id="edu"
            className="max-w-7xl mx-auto p-12  shadow-custom-2 hover:shadow-[#31ffcc]
          rounded-lg"
        >

            <h2 className="text-4xl font-bold text-center text-white mb-12">
                Education
            </h2>
            <div>
                <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold">
                    Bsc in Computer science and engineering
                </h2>
                <p className="text-slate-300 text-lg md:text-xl ">
                    Shanto-Mariam University of Creative Technology (SMUCT)
                    <p className="text-slate-200 text-lg md:text-xl">From : 2022 - Present</p>
                </p>
            </div>
            <div className=" mt-8">
                <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold">
                    Higher Secondary Certificate (HSC)
                </h2>
                <p className="text-slate-300 text-lg md:text-xl ">
                    Jatir Janak Bongobondu Sheikh Mubjibur Rahman Govt. College (JJBBSRGC)
                    <p className="text-slate-200 text-lg md:text-xl">From : 2018 - 2020</p>
                </p>
            </div>
        </div>
    );
};

export default Education;
