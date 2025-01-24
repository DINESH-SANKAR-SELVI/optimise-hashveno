// src/App.js
import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/Fonts.css';
import { FaX } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const version = 'V1.0.0';
    const buildCount = '01';


      const { t, i18n } = useTranslation();
    
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <section id="footer">
            <footer className="footer d-flex flex-column justify-content-center align-items-center ">
                <div className="footer-link-container row justify-content-center align-items-center w-100">
                    <div className="col-md-8">
                        <div className="row">
                            {/* <div className="col-sm-6 col-md mb-4 mb-md-0">
                                <h3>Discover</h3>
                                <ul className="list-unstyled nav-links">
                                    <li><a href="#">Website editors</a></li>
                                    <li><a href="#">Online retail</a></li>
                                    <li><a href="#">Get started</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            </div> */}
                            <div className="col-sm-6 col-md mb-4 mb-md-0">
                                <h3>Products</h3>
                                <ul className="list-unstyled nav-links">
                                    <li><a href="https://dinesh-sankar-selvi.github.io/innovarashopix/">InnovaraShopix</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md mb-4 mb-md-0">
                                <h3>About</h3>
                                <ul className="list-unstyled nav-links">
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#team">Team</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md mb-4 mb-md-0">
                                <h3>Services</h3>
                                <ul className="list-unstyled nav-links">
                                    <li><a href="#blog">Events</a></li>
                                    <li><a href="#blog">News</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md mb-4 mb-md-0">
                                <h3>Help</h3>
                                <ul className="list-unstyled nav-links">
                                    <li><a href="#faq">FAQ</a></li>
                                    <li><a href="#support">Support</a></li>
                                    {/* <li><a href="#">Knowledge Base</a></li> */}
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md mb-4 mb-md-0">
                                <h3>Languages</h3>
                                <ul className="list-unstyled nav-links">
                                    <li><a onClick={() => changeLanguage('tam')}>தமிழ்</a></li>
                                    <li><a onClick={() => changeLanguage('en')}>English</a></li>
                                    <li><a onClick={() => changeLanguage('hin')}>हिन्दी</a></li>
                                    <li><a onClick={() => changeLanguage('tel')}>తెలుగు</a></li>
                                    <li><a onClick={() => changeLanguage('mal')}>മലയാളം</a></li>
                                    <li><a onClick={() => changeLanguage('kan')}>ಕನ್ನಡ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-12 pb-3">
                        <div className="border-top">

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between w-100">
                    <div className="col-md-4">
                        <ul className="list-unstyled social mb-0 pb-0 nav-left">
                            <li><a href="https://www.facebook.com/profile.php?id=61572540565691"><FaFacebook className="icon" /></a></li>
                            <li><a href="tel:+917604829520"><FaWhatsapp className="icon" /></a></li>
                            <li><a href="https://www.instagram.com/hashveno/"><FaInstagram className="icon" /></a></li>
                            <li><a href="https://x.com/HashVeno"><FaX className="icon" /></a></li>
                            <li><a href="https://www.linkedin.com/in/hash-veno-a72856348/"><FaLinkedin className="icon" /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <span className="small">&copy; {new Date().getFullYear()} HashVeno & It's Team. All Rights Reserved. {`latest@${version}-B${buildCount} ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}</span>
                    </div>
                    <div className="col-md-4 d-flex flex-row text-right justify-content-center">
                        {/* <ul className="list-unstyled social app mb-0 pb-0 nav-right d-flex">
                                <li><a href="#"><FaApple className="icon mr-3" /> AppStore</a></li>
                                <li><a href="#"><FaGooglePlay className="icon mr-3" /> GoogleStore</a></li>
                            </ul> */}
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;