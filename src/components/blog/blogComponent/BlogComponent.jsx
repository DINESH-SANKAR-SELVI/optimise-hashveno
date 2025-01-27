import React from 'react';
import BlogCardComponent from '../blogCardComponent/BlogCardComponent';
import './BlogComponent.css';

const BlogComponent = ({ t }) => {
    const cardData = [
        {
            id: 1,
            tag: 'TECH',
            date: 'Jan 21, 2025',
            title: 'Is Your Shop Ready for the Future? Embrace Virtualization and Automation!',
            creator: 'Kuringi Selvan',
            imgUrl: 'assets/team-resources/kuringi-hashveno.jpg',
        },
        {
            id: 2,
            tag: 'NEWS',
            date: 'Jan 21, 2025',
            title: 'Is Your Shop Management Holding You Back? Unlock Your Store’s Potential!',
            creator: 'Dinesh Sankar',
            imgUrl: 'assets/team-resources/founder-hashveno-crop.jpg',
        },
        {
            id: 3,
            tag: 'Deals',
            date: 'Jan 21, 2025',
            title: 'Future-Proof Your Business: Integrating Virtual Solutions in Your Shop',
            creator: 'Thejas Sridhar',
            imgUrl: 'assets/team-resources/bond-james.png',
        }
    ];

    return (
        <div className="blog-card-container">
            {cardData.map(card => (
                <BlogCardComponent key={card.id} card={card} />
            ))}
        </div>
    );
};

export default BlogComponent;