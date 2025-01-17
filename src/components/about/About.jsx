import React from 'react';
import ME from '../../assets/web.webp';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <div id="about" className="mt-5 mb-20 md:mt-20 px-4">
            <h5 className="text-lg text-light xl:text-2xl">Get To Know</h5>
            <h2 className="mt-5 text-4xl lg:text-5xl xl:text-6xl text-[#A68F97]">About Me</h2>
            <div className="grid gap-6 mt-10 md:grid-cols-[45%,40%] xl:grid-cols-[35%,50%] lg:grid-cols-[35%,50%] sm:grid-cols-1">
                {/* Image container: Hidden on mobile screens */}
                <div className="p-3 aspect-square rounded-lg bg-gradient-to-r from-transparent via-primary to-black grid place-items-center bg-[#A68F97] hidden sm:block">
                    <div className="overflow-hidden rounded-lg h-full md:w-[20rem] lg:w-96 lg:h-96 transform rotate-12 transition-transform hover:rotate-0 duration-700">
                        <img src={ME} alt="About Me" className="w-full h-full object-cover " />
                    </div>
                </div>

                <div className="space-y-6 lg:space-x-10">
                    <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                        <div className="p-6 text-center transition border rounded-lg bg-bg-variant border-transparent hover:bg-transparent hover:border-primary">
                            <FaAward className="mb-4 text-xl text-primary" />
                            <h5 className="text-sm font-semibold">Level</h5>
                            <small className="text-xs text-light">Fresher</small>
                        </div>
                        <div className="p-6 text-center transition border rounded-lg bg-bg-variant border-transparent hover:bg-transparent hover:border-primary">
                            <TbCertificate className="mb-4 text-xl text-primary" />
                          
                            <h5 className="text-sm font-semibold">Certificate</h5>
                            <small className="text-xs flex text-light mt-1">+11 Certificates</small>
                        
                            
                        </div>
                        <div className="p-6 text-center transition border rounded-lg bg-bg-variant border-transparent hover:bg-transparent hover:border-primary">
                            <VscFolderLibrary className="mb-4 text-xl text-primary" />
                            <h5 className="text-sm font-semibold">Projects</h5>
                            <small className="text-xs text-light block mt-1">+3 Completed</small>
                            <small className="text-xs text-light block mt-1">+1 Ongoing</small>
                        </div>
                    </div>
                    <p className="text-light mx-5 md:text-sm md:ml-5 text-center">
                    I am a meticulous web developer with a passion for creating responsive, user-friendly, and efficient applications.My perfectionist nature ensures high-quality code, optimized performance, and seamless user experiences. With certifications from platforms like Coursera, Udemy. I continuously enhance my technical skills. I also hold soft skills certifications, enabling effective collaboration and communication. I strive to deliver innovative solutions and contribute to impactful projects.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
