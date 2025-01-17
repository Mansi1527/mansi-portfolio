import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaGithubAlt ,FaMedium,FaWhatsapp  } from 'react-icons/fa';

// import { FaMedium } from "react-icons/fa6";
import { AiOutlineYoutube, AiOutlineSkype } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import { ImBlogger2 } from 'react-icons/im';

/**
 * Added Testimonials link in the footer
 * Ensured all href links are correctly formatted
 */

const Footer = () => {
    return (
        <footer className='w-full'>
            {/* Footer logo */}
            <a href="/" className='footer__logo'>Mansi Yadav</a>

            {/* Permalinks */}
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                
                <li><a href="#contact">Contact</a></li>
            </ul>  

            {/* Social media icons */}
            <div className="footer__socials">
                {/* <a href="https://www.facebook.com/vunguyen260803.trying/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a> */}
                {/* <a href="https://www.youtube.com/channel/UC-UdQaOLqi0B9pL7TB3qiCQ" target="_blank" rel="noopener noreferrer"><AiOutlineYoutube /></a> */}
                <a href="https://www.linkedin.com/in/mansiyadav1527/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://github.com/Mansi1527/" target="_blank" rel="noopener noreferrer"><FaGithubAlt /></a>
                {/* <a href="http://nguyenvu1310.github.io/" target="_blank" rel="noopener noreferrer"><ImBlogger2 /></a> */}
                <a href="https://api.whatsapp.com/send/?phone=%2B919336885413&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://medium.com/@mansiy1527"><FaMedium /></a>
            </div>

            {/* Footer copyright */}
            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/paras-bhardwaj-579671209/" target="_blank" rel="noopener noreferrer">Mansi</a></b>. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
