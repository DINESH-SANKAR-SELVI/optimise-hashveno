import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaBox, FaServicestack, FaEnvelope, FaNewspaper } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './HeaderComponent.css';
import ThemeSwitcherComponent from '../../themeSwitcher/themeSwitcherComponent/ThemeSwitcherComponent';

const HeaderComponent = ({setShowLogin}) => {

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else {
        setTop(-120);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);



  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on resize if in desktop view
  const handleResize = () => {
    if (window.innerWidth > 770) {
      setMobileMenuOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoginOpenButtonClick = () => {
    setShowLogin(true);
  };

  const navbarStyle = {
    position: 'fixed',
    top: `${top}px`,
    width: '100%',
    // backgroundColor: '#333',
    color: 'white',
    transition: 'top 0.3s',
    padding: '15px',
    textAlign: 'center',
  };

  return (
    <>
      <div style={{ ...navbarStyle, display: isMobileMenuOpen ? 'none' : 'flex' }} className="navbar">
        <div className="nav-logo">
          <a href="#">HashVeno</a>
        </div>
        <div className="nav-items">
          <ul>
            <li><div className="lang-dropdown cardo-regular nav-item">
              <span className="lang-dropbtn"><img className='icon' src='assets/feature-resources/multi-language.jpeg' width={40} /></span>
              <div className="lang-dropdown-content">
                <a onClick={() => changeLanguage('tam')}>தமிழ்</a>
                <a onClick={() => changeLanguage('en')}>English</a>
                <a onClick={() => changeLanguage('hin')}>हिन्दी</a>
                <a onClick={() => changeLanguage('tel')}>తెలుగు</a>
                <a onClick={() => changeLanguage('mal')}>മലയാളം</a>
                <a onClick={() => changeLanguage('kan')}>ಕನ್ನಡ</a>
              </div>
            </div></li>
            <li><a className="nav-item" ><ThemeSwitcherComponent /></a></li>
            <li><a href="#about" className="nav-item">
              <FaInfoCircle className="icon" />
              <span>{t('about.title')}</span>
            </a></li>
            <li><a href="#services" className="nav-item">
              <FaServicestack className="icon" />
              <span>{t('services.title')}</span>
            </a></li>
            <li><a href="#products" className="nav-item">
              <FaBox className="icon" />
              <span>{t('products.title')}</span>
            </a></li>
            <li><a href="#blog" className="nav-item">
              <FaNewspaper className="icon" />
              <span>{t('articles.title')}</span>
            </a></li>
            <li><a href="#contact" className="nav-item">
              <FaEnvelope className="icon" />
              <span>{t('contact.title')}</span>
            </a></li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer"></div>
          <a onClick={handleLoginOpenButtonClick} className='btn btn-outline-light'>Join us</a>
        </div>
        <div id="hamburger-menu" onClick={toggleMobileMenu}>&#9776;</div>
      </div>

      <div id="mobile-menu" style={{ display: isMobileMenuOpen ? 'flex' : 'none', transform: isMobileMenuOpen ? 'translateX(0%)' : 'translateX(-100%)', transition: 'transform 0.3s ease' }}>
        <div className="mobile-nav-items">
          <ul>
            <li><div className="lang-dropdown cardo-regular nav-item">
              <span className="lang-dropbtn"><img className='icon' src='assets/feature-resources/multi-language.jpeg' width={40} /></span>
              <div className="lang-dropdown-content">
                <a onClick={() => { changeLanguage('tam'); closeMobileMenu(); }}>தமிழ்</a>
                <a onClick={() => { changeLanguage('en'); closeMobileMenu(); }}>English</a>
                <a onClick={() => { changeLanguage('hin'); closeMobileMenu(); }}>हिन्दी</a>
                <a onClick={() => { changeLanguage('tel'); closeMobileMenu(); }}>తెలుగు</a>
                <a onClick={() => { changeLanguage('mal'); closeMobileMenu(); }}>മലയാളം</a>
                <a onClick={() => { changeLanguage('kan'); closeMobileMenu(); }}>ಕನ್ನಡ</a>
              </div>
            </div></li>
            <li><a href="#about" onClick={closeMobileMenu} className="nav-item">
              <FaInfoCircle className="icon" />
              <span>{t('about.title')}</span>
            </a></li>
            <li><a href="#services" onClick={closeMobileMenu} className="nav-item">
              <FaServicestack className="icon" />
              <span>{t('services.title')}</span>
            </a></li>
            <li><a href="#products" onClick={closeMobileMenu} className="nav-item">
              <FaBox className="icon" />
              <span>{t('products.title')}</span>
            </a></li>
            <li><a href="#blog" onClick={closeMobileMenu} className="nav-item">
              <FaNewspaper className="icon" />
              <span>{t('articles.title')}</span>
            </a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className="nav-item">
              <FaEnvelope className="icon" />
              <span>{t('contact.title')}</span>
            </a></li>
            <li><a><div onClick={closeMobileMenu} className="nav-item">
              <ThemeSwitcherComponent />
            </div></a></li>
          </ul>
        </div>
        <div className="mobile-nav-button" onClick={closeMobileMenu}>
          <div className="anim-layer"></div>
          <a onClick={handleLoginOpenButtonClick} className='btn btn-outline-light'>Join us</a>
        </div>
        <div id="hamburger-cross" onClick={closeMobileMenu}>&#10006;</div>
      </div>
    </>
  );
};

export default HeaderComponent;