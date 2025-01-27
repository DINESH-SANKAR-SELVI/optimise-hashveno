import React from 'react';
import ProductCardComponent from '../productCard/ProductCardComponent'

const products = [
    {
        id: 1,
        name: 'InnovaraShopix',
        description: 'A Shop Management System streamlines retail operations by integrating inventory, sales, and customer management for improved efficiency and decision-making.',
        features: [
            { logoURL: 'assets/feature-resources/integration-logo.png', description: 'Integration' },
            { logoURL: 'assets/feature-resources/export-logo.png', description: 'Export' },
            { logoURL: 'assets/feature-resources/analytics-logo.png', description: 'Analytics' }
        ],
        status: "Active",
        imageSrc: 'assets/product-resources/WelcomePage.png',
        productLogo: 'assets/options-resources/verified-logo.png',
        price: '$149',
        clients: '100K',
        members: '180K',
        Collobration: '250',
        exploreLink: 'https://dinesh-sankar-selvi.github.io/innovarashopix/',
    }
];

const ProductsComponent = ({ id }) => {

    const openExploreLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div id={id} className="product-list">
            {products.map((product) => (
                <ProductCardComponent key={product.id} product={product} openExploreLink={openExploreLink} />
            ))}
        </div>
    );
};

export default ProductsComponent;