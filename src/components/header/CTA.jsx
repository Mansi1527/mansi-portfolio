import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
    return (
        <div className='mt-8 lg:mt-10'>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0'>
                <a href={CV} download className='btn xl:text-2xl lg:text-xl'>
                    Download CV
                </a>
                <a href="#contact" className='btn btn-primary xl:text-2xl lg:text-xl'>
                    Let's Talk
                </a>
            </div>
        </div>
    );
};

export default CTA;
