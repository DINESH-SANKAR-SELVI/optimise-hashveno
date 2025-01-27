// src/components/SocialLinks.js
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const SocialLinks = () => {
    return (
        <ul className="list-unstyled social mb-0 pb-0 nav-left">
            <li><a href="https://www.facebook.com/profile.php?id=61572540565691"><FaFacebook className="icon" /></a></li>
            <li><a href="tel:+917604829520"><FaWhatsapp className="icon" /></a></li>
            <li><a href="https://www.instagram.com/hashveno/"><FaInstagram className="icon" /></a></li>
            <li><a href="https://x.com/HashVeno"><FaX className="icon" /></a></li>
            <li><a href="https://www.linkedin.com/in/hash-veno-a72856348/"><FaLinkedin className="icon" /></a></li>
        </ul>
    );
};

export default SocialLinks;