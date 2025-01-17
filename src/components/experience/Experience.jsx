import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience' className='mb-20'>
            <h5 className='text-lg xl:text-2xl'>What Skill I Have</h5>
            <h2 className='mt-5 text-4xl lg:text-5xl xl:text-6xl mb-10'>My Experience</h2>

            <div className="container mt-10 space-y-10 grid md:gap-8 lg:gap-20 xl:gap-20 md:grid-cols-2 sm:grid-cols-1">
                {/* First Section */}
                <div className="bg-[#79717A] p-8 rounded-2xl border border-transparent duration-700 transition-all hover:bg-transparent hover:border-white">
                    <h3 className="text-center mb-6 text-primary">Language, Libraries and Environment</h3>
                    <div className="experience__content grid grid-cols-2 gap-4">
                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Nextjs</h4>
                                <small className="text-light">Practitioner</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Nodejs</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Second Section */}
                <div className="bg-[#79717A] p-10 rounded-2xl border border-transparent duration-700 transition-all hover:bg-transparent hover:border-white">
                    <h3 className="text-center mb-6 text-primary">Frameworks, Databases, and Testing</h3>
                    <div className="experience__content grid grid-cols-2 gap-4">
                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4 className="flex">Tailwind CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4 mx-16">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Express.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Github</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>My SQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Postman</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
