    import React from 'react';
    import Project1 from '../assets/Project1.png';
    import Project2 from '../assets/Project2.png';

    const ProjectDisplay = () => {
    return (
        <>
        <section class="max-w-screen-xl mx-auto relative pb-8 sm:pb-16 bg-[#111827]">
            <h2 className="text-3xl sm:text-[40px] relative z-10 font-semibold px-4 py-2 w-max mx-auto text-center text-[#42c6a1] sm:border-b-2 border-[#42c6a1]">
            Latest Works
            </h2>
            <div className="flex flex-col sm:flex-row mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
            <a href="" className="flex w-full relative justify-center sm:justify-start">
                <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
                <img className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgb(66,198,161)]" src={Project1} alt="" />
                </div>
            </a>

            <div className="w-full text-center">
                <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">GetYourFood</h3>
                <span className="text-[#459bd5] text-base md:text-lg">(Restaurant website)</span>
                <p className="text-justify text-sm md:text-base mt-6 text-white">
                A visually appealing restaurant website crafted with HTML and CSS, featuring responsive design and user-friendly navigation. Key elements include a menu showcase and a reservation form, reflecting the restaurant's ambiance. This project highlights my skills in front-end development and web design.
                </p>

                <ul className="flex flex-wrap gap-2 mt-6 justify-center">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-white">#HTML</li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-white">#CSS</li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-white">#JS</li>
                </ul>
            </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
            <div className="order-2 sm:order-1 w-full text-center">
                <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">ReadNow</h3>
                <span className="text-[#ffe578] text-base md:text-lg">(Book recommender system)</span>
                <p className="text-justify text-sm md:text-base mt-6 text-white">
                This project features a user-friendly website designed with HTML and CSS, allowing users to discover and recommend books easily. The sleek and responsive layout enhances the browsing experience, showcasing book details and user reviews. This project demonstrates my ability to create engaging web interfaces and streamline user interaction.
                </p>

                <ul className="flex flex-wrap gap-2 mt-6 justify-center">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-white">#HTML</li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-white">#CSS</li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-white">#PYTHON</li>
                </ul>
            </div>
            <a href="#" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
                <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
                <img className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(66,198,161)]" src={Project2} />

                </div>
            </a>
            </div>
        </section>
        </>
    );
    };

    export default ProjectDisplay;
