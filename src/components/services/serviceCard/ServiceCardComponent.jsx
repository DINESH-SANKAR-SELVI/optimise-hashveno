import React from 'react';
import './ServiceCardComponent.css';

const ServiceCardComponent = ({ service }) => {
    return (
        <div className='menu-container'>
            <div className='menu-logo-container'>
                <img src={service.image} alt={service.title} />
            </div>
            <div className='menu-title-container'>
                <h3>{service.title}</h3>
            </div>
            <div className="sub-menu double">
                <div className="icon-box gb a">
                    <div className="text">
                        <div className="title">{service.description}</div>
                    </div>
                </div>
                <div className="bottom-container">
                    You Need To Know More? <a target='_blank' rel="noopener noreferrer" href={service.link}>Here</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardComponent;