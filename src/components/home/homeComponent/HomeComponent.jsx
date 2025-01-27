import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import './HomeComponent.css';

const HomeComponent = ({id, t}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    "assets/home-screeen-resources/homepage-image1.jpg",
    "assets/home-screeen-resources/homepage-image2.jpg",
    "assets/home-screeen-resources/homepage-image3.jpg",
    "assets/home-screeen-resources/homepage-image4.jpg",
    "assets/home-screeen-resources/homepage-image5.jpg",
    "assets/home-screeen-resources/homepage-image6.jpg",
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, 4000); // Change slide every 4 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <div id={id} className="welcome-section" style={{paddingTop: '6%'}}>
      <marquee>
        <h2 style={{ fontSize: 'small', padding: 0, margin: 0 }}>{t('welcome')}</h2>
      </marquee>
      <Helmet>
        <title>Home - hashveno</title>
        <meta name="description" content="Welcome to the home page of our website." />
      </Helmet>
      <div
        className="image-thumbnail-carousel"
        // onMouseEnter={stopAutoSlide}
        // onMouseLeave={startAutoSlide}
      >
        <div className="image-display">
          <div className="screen">
            <img src={slides[activeIndex]} alt="" />
          </div>
        </div>
        {/* <button
          type="button"
          className="carousel__btn prev"
          aria-label="Previous slide"
          onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
        >
          <b>{'<'}</b>
        </button> */}
        {/* <button
          type="button"
          className="carousel__btn next"
          aria-label="Next slide"
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)}
        >
          <b>{'>'}</b>
        </button> */}
      </div>
    </div>
  );
};

export default HomeComponent;