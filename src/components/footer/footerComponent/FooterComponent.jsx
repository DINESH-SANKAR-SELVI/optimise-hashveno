// src/App.js
import React from 'react';
import './FooterComponent.css';
import '../../../styles/Fonts.css';
import { useTranslation } from 'react-i18next';
import FooterLink from '../footerLink/FooterLink';
import SocialLinks from '../socialLinks/SocialLinks';
import LanguageSelector from '../languageSelector/LanguageSelector';

const FooterComponent = () => {
    const version = 'V1.0.0';
    const buildCount = '01';
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const footerLinks = [
        {
            title: 'Products',
            links: [
                { text: 'InnovaraShopix', href: 'https://dinesh-sankar-selvi.github.io/innovarashopix/' },
            ],
        },
        {
            title: 'About',
            links: [
                { text: 'Contact', href: '#contact' },
                { text: 'Services', href: '#services' },
                { text: 'Team', href: '#team' },
            ],
        },
        {
            title: 'Services',
            links: [
                { text: 'Events', href: '#blog' },
                { text: 'News', href: '#blog' },
            ],
        },
        {
            title: 'Help',
            links: [
                { text: 'FAQ', href: '#faq' },
                { text: 'Support', href: '#support' },
            ],
        },
    ];

    return (
        <section id="footer">
            <footer className="footer d-flex flex-column justify-content-center align-items-center">
                <div className="footer-link-container row justify-content-center align-items-center w-100">
                    <div className="col-md-8">
                        <div className="row">
                            {footerLinks.map((footerLink, index) => (
                                <FooterLink key={index} title={footerLink.title} links={footerLink.links} />
                            ))}
                            <LanguageSelector changeLanguage={changeLanguage} />
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-12 pb-3">
                        <div className="border-top"></div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between w-100">
                    <div className="col-md-4">
                        <SocialLinks />
                    </div>
                    <div className="col-md-4 text-center">
                        <span className="small">&copy; {new Date().getFullYear()} HashVeno & It's Team. All Rights Reserved. {`latest@${version}-B${buildCount} ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}</span>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default FooterComponent;