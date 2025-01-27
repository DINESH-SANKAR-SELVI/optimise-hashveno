import React from 'react';
import './BlogCardComponent.css';

const BlogCardComponent = ({ card }) => {
    return (
        <div className={`blog-card-${card.id}`}>
            <div className='blog-card'>
                <div className="blog-card-img" style={{ backgroundImage: `url(${card.imgUrl})` }}></div>
                <div className="blog-card-img-hovered" style={{ backgroundImage: `url(${card.imgUrl})` }}></div>
                <div className="blog-card-info">
                    <div className="blog-card-about">
                        <a className="blog-card-tag">{card.tag}</a>
                        <div className="blog-card-time">{card.date}</div>
                    </div>
                    <h1 className="blog-card-title">{card.title}</h1>
                    <div className="blog-card-creator">by {card.creator}</div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardComponent;