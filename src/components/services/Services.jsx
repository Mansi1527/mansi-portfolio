import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
    return (
        <section id="services" className='flex flex-col text-center mb-20'>
            <h5 className="text-lg xl:text-2xl">What I Offer</h5>
            <h2 className="mt-5 text-4xl lg:text-5xl xl:text-6xl mb-10">Web Development Services</h2>

            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                {/* Frontend Development */}
                <article className="service bg-bg-variant rounded-b-lg border border-primary transition-all hover:bg-transparent duration-700 hover:border-primary-variant">
                    <div className="service__head bg-primary p-8 rounded-b-lg shadow-xl">
                        <h3 className="text-bg text-xl text-center">Frontend Development</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Building responsive and dynamic UIs</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Single Page Applications (SPAs)</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>React.js, Next.js expertise</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>CSS Frameworks: Tailwind CSS, Material UI</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Accessibility and SEO optimization</p>
                        </li>
                    </ul>
                </article>

                {/* Backend Development */}
                <article className="service bg-bg-variant rounded-b-lg border border-primary transition-all hover:bg-transparent duration-700 hover:border-primary-variant">
                    <div className="service__head bg-primary p-8 rounded-b-lg shadow-xl">
                        <h3 className="text-bg text-xl text-center">Backend Development</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>RESTful API development</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Node.js and Express.js expertise</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Database management: MongoDB, SQL</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Authentication and security best practices</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Integration with third-party APIs</p>
                        </li>
                    </ul>
                </article>

                {/* Full-Stack Solutions */}
                <article className="service bg-bg-variant rounded-b-lg border border-primary transition-all hover:bg-transparent duration-700 hover:border-primary-variant">
                    <div className="service__head bg-primary p-8 rounded-b-lg shadow-xl">
                        <h3 className="text-bg text-xl text-center">Full-Stack Solutions</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>End-to-end application development</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Deployment and hosting (Vercel, Netlify, Heroku)</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Version control with Git and GitHub</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Unit testing with Jest</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Performance optimization for scalable apps</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
