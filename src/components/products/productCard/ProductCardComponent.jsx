import React from 'react';
import './ProductCardComponent.css';

const ProductCardComponent = ({ product, openExploreLink }) => {
    return (
        <section className="product-card-design">
            <div style={{ backgroundImage: `url(${product.imageSrc})` }} className='image-container'>
                <div className='status-menu-container'>
                    <div className='status'>
                        <div style={{ backgroundImage: `url(assets/options-resources/active-indicator-logo.png)` }} className='status-indicator'></div>
                        <div className='status-indicator-description'>
                            <p>{product.status}</p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(assets/options-resources/menu-logo.png)` }} className='menu'></div>
                </div>

                <div className='sharelink-container'>
                    <div style={{ backgroundImage: `url(assets/social-media-resources/facebook-logo.png)` }} className='link-icon'></div>
                    <div style={{ backgroundImage: `url(assets/social-media-resources/whatsapp-logo.png)` }} className='link-icon'></div>
                    <div style={{ backgroundImage: `url(assets/social-media-resources/instagram-logo.png)` }} className='link-icon'></div>
                </div>
            </div>

            <div className='product-detail-container'>
                <div className='product-name-logo-container dm-serif-text-regular-italic'>
                    <div className='product-name'>
                        <p>{product.name}</p>
                    </div>
                    <div style={{ backgroundImage: `url(${product.productLogo})` }} className='product-logo'></div>
                </div>

                <div className='description-container'>
                    <div className='description-detail cardo-regular'>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>

            <div className='features-container'>
                <div className='title-container'>
                    <div className='title-feature'>
                        <p>Features</p>
                    </div>
                </div>

                <div className='features-details-container'>
                    {product.features.map((feature, index) => (
                        <div key={index} className='feature'>
                            <div style={{ backgroundImage: `url(${feature.logoURL})` }} className='feature-icon'></div>
                            <div className='feature-name'>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='rating-container cardo-regular'>
                <div className='all-rating-holder'>
                    <div className='rating-board'>
                        <div className='rating-count'>
                            <p>{product.clients}+</p>
                        </div>
                        <div className='rating-description'>
                            <p>Clients</p>
                        </div>
                    </div>
                    <div className='rating-board'>
                        <div className='rating-count'>{product.members}+</div>
                        <div className='rating-description'>Membership</div>
                    </div>
                    <div className='rating-board'>
                        <div className='rating-count'>{product.Collobration}+</div>
                        <div className='rating-description'>Collaboration</div>
                    </div>
                </div>
            </div>

            <div className='other-part-container arial-sans-serif'>
                <div className='other-part since-project'>
                    <div style={{ backgroundImage: `url(assets/options-resources/since-logo.png)` }} className='other-part-logo'></div>
                    <div className='other-part-detail'>
                        <p>Jan 2025</p>
                    </div>
                </div>
                <div onClick={() => openExploreLink(product.exploreLink)} className='other-part explore-project'>
                    <div style={{ backgroundImage: `url(assets/options-resources/explore-logo.png)` }} className='other-part-logo'></div>
                    <div className='other-part-detail'>
                        <p>Explore More</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCardComponent;