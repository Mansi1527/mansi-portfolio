import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data1 = [
    {
        id: 1,
        image: IMG1,
        title: 'MiniURL: Efficient URL shortener for fast access.',
        github: 'https://github.com/Mansi1527/miniURL',
        demo: 'https://github.com/Mansi1527/miniURL',
    },
    {
        id: 2,
        image: IMG2,
        title: 'CodeWithMansi: Online HTML, CSS, JS code editor.',
        github: 'https://github.com/mazer0P/Web-Scrapper',
        demo: 'https://codewithmansi.vercel.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: 'File Sharing System: Upload, share, and download files easily. ',
        github: 'https://github.com/Mansi1527/File-sharing-system',
        demo: 'https://github.com/Mansi1527/File-sharing-system',
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: '',
    //     github: 'https://github.com/NguyenVu1310/threeblock',
    //     demo: 'https://3block.systems/',
    // },
]
const data2 = [
    {
        id: 1,
        image: IMG4,
        title: 'Data leak worksheet Data leak worksheet',
        github: 'https://github.com/mazer0P/Google-Cybersecurity-Certificate/blob/main/Course%20Support%20Files/Activity%20Template_%20Data%20leak%20worksheet.pdf',
        demo: 'https://nguyenvu1310.github.io/',
    },
    {
        id: 2,
        image: IMG5,
        title: 'Security audit of a finctional comapany',
        github: 'https://github.com/mazer0P/Google-Cybersecurity-Certificate/blob/main/Course%20Support%20Files/Securityaudit%40BotiumToys.pdf',
        demo: 'https://nguyenvu-personal-site.netlify.app/',
    },
    {
        id: 3,
        image: IMG6,
        title: 'Velnerability assesement of a organization server',
        github: 'https://github.com/mazer0P/Google-Cybersecurity-Certificate/blob/main/Course%20Support%20Files/Vulnerability%20assessment%20report.pdf',
        demo: 'https://nguyenvu-todo-list.netlify.app/',
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: '',
    //     github: 'https://github.com/NguyenVu1310/threeblock',
    //     demo: 'https://3block.systems/',
    // },
]


const Portfolio = () => {
    return (
        <section id='portfolio' className='mb-20'>
            <h5 className='text-lg xl:text-2xl'>My Recent Projects</h5>
            <h2 className='mt-5 text-4xl lg:text-5xl xl:text-6xl mb-10'>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data1.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            
            <h2 className="mt-20 text-4xl lg:text-5xl xl:text-6xl mb-10 text-center">Experience</h2>
            <div className="md:flex grid justify-center items-center max-w-6xl mx-8 gap-10">
    {/* Frontend Developer at Totally Optimised Solutions */}
    <div className="text-center mb-6 w-full max-w-md p-6  rounded-7xl shadow-lg bg-[#79717A] hover:bg-transparent hover:border hover:border-white duration-700">
        <h3 className="text-2xl font-bold">Frontend Developer</h3>
        <p className="text-lg italic mt-2">Totally Optimised Solutions</p>
        <p className="text-base text-center mt-3 max-w-2xl mx-auto">
            I worked as a Frontend Developer for 3 months, collaborating with various teams and working on a diverse range of projects. 
            I gained hands-on experience in front-end technologies, optimizing user interfaces, and contributing to product development.
        </p>
        <div className="mt-6 underline hover:scale-125 duration-700">
            {/* Add your company logo or relevant image here */}
            <a href="https://www.tos.systems/" className='text-white'>Totally Optimised Solutions</a>
        </div>

        <div className="my-10 text-black">
    <a href="https://github.com/Mansi1527/" className=" bg-[#A68F97] text-black px-6 py-5 rounded-lg hover:bg-white hover:text-black">
        See My Work
    </a>
</div>
    </div>

    {/* Freelancing Experience */}
    <div className="text-center mb-6 w-full max-w-md p-6  shadow-lg bg-[#79717A] hover:bg-transparent hover:border hover:border-white duration-700 rounded-7xl">
        <h3 className="text-2xl font-bold">Freelancer - Frontend Developer</h3>
        <p className="text-lg italic mt-2">Freelancing (6 months)</p>
        <p className="text-base text-center mt-3 max-w-2xl mx-auto">
            I worked as a freelance Frontend Developer for 6 months on 3 different projects. These projects involved building responsive, user-friendly interfaces for clients in various industries. I focused on enhancing the user experience and ensuring seamless cross-browser compatibility.
        </p>
    </div>
</div>


            <div>

            </div>
        </section>
    )
}

export default Portfolio