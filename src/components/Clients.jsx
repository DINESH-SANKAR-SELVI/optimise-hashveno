import React from 'react';
import '../styles/Clients.css';
import '../styles/Fonts.css';
import { useTranslation } from 'react-i18next';
// import { Helmet } from 'react-helmet';

const Clients = () => {

    const { t } = useTranslation();

    const clients = [
        { brandName: "Amazon", imageURL: "assets/clients-brand/amazon.png" },
        { brandName: "EBay", imageURL: "assets/clients-brand/ebay.png" },
        { brandName: "Elite Gift", imageURL: "assets/clients-brand/elite-gift.png" },
        { brandName: "Gift Gallery", imageURL: "assets/clients-brand/gift-gallery.png" },
        { brandName: "Ludi", imageURL: "assets/clients-brand/ludi.png" },
        { brandName: "Luxury Shop", imageURL: "assets/clients-brand/luxuryshop.png" },
        { brandName: "Regal", imageURL: "assets/clients-brand/regal.jpg" },
        { brandName: "Shop", imageURL: "assets/clients-brand/shop.png" },
        { brandName: "Subash", imageURL: "assets/clients-brand/subash.jpg" },
        { brandName: "The Deal", imageURL: "assets/clients-brand/the-deal.jpg" },
        { brandName: "Visual Identity", imageURL: "assets/clients-brand/visual-identity.png" }
    ];

    return (
        <>
            {/* <Helmet>
                <title>Clients</title>
                <meta name="description" content="Clients Of InnovaraShopix" />
            </Helmet> */}
            <section id="clients" className="cardo-regular">
                <div className='clients-container'>
                    <h2>{t('client.title')}</h2>
                    <p className='text text-center'>{t('client.description')}</p>
                    <div className="clients-scroll-parent">
                        <div className="clients-scroll-element clients-primary">
                            {clients.map((client, index) => (
                                <div key={`client-primary-${index}`} className='clients-image-name-container'>
                                    <img src={client.imageURL} alt={`${client.brandName} logo`} />
                                    <p>{client.brandName}</p>
                                </div>
                            ))}
                        </div>
                        <div className="clients-scroll-element clients-secondary">
                            {clients.map((client, index) => (
                                <div key={`client-secondary-${index}`} className='clients-image-name-container'>
                                    <img src={client.imageURL} alt={`${client.brandName} logo`} />
                                    <p>{client.brandName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Clients;