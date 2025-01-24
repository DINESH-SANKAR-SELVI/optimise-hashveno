import React from 'react';
import '../styles/Blog.css';
import '../styles/Fonts.css';
// import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Blog = () => {

    const { t } = useTranslation();

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
        <>
            {/* <Helmet>
                <title>Blog</title>
                <meta name="description" content="Blog Of InnovaraShopix" />
            </Helmet> */}
            <section id="blog" >
                <div className="cardo-regular">
                    <h2>{t('articles.title')}</h2>
                    <div className="blog-card-container">
                        {cardData.map(card => (
                            <div key={card.id} className={` blog-card-${card.id}`}>
                                <div className='blog-card'>
                                    <div className="blog-card-img" style={{ backgroundImage: `url(${card.imgUrl})` }}></div>
                                    {/* <a href="" className="blog-card-link"> */}
                                        <div className="blog-card-img-hovered" style={{ backgroundImage: `url(${card.imgUrl})` }}></div>
                                    {/* </a> */}
                                    <div className="blog-card-info">
                                        <div className="blog-card-about">
                                            <a className="blog-card-tag">{card.tag}</a>
                                            <div className="blog-card-time">{card.date}</div>
                                        </div>
                                        <h1 className="blog-card-title">{card.title}</h1>
                                        <div className="blog-card-creator">by {/*<a href="">*/}{card.creator}{/*</a>*/}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;