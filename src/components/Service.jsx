import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';
// import { Helmet } from 'react-helmet';

const Services = () => {

    const { t } = useTranslation();

    const servicesData = [
        {
            id: 1,
            image: 'assets/services-logo-resources/custom-web-application.jpg',
            title: t('services.customSoftware'),
            description: t('services.customSoftwareDescription'),
            link: 'https://en.wikipedia.org/wiki/Custom_software/'
        },
        {
            id: 2,
            image: 'assets/services-logo-resources/cloud-technology.png',
            title: t('services.cloudApplications'),
            description: t('services.cloudApplicationsDescription'),
            link: 'https://en.wikipedia.org/wiki/Cloud_computing/'
        },
        {
            id: 3,
            image: 'assets/services-logo-resources/integration.png',
            title: t('services.integrationServices'),
            description: t('services.integrationServicesDescription'),
            link: 'https://en.wikipedia.org/wiki/SQL_Server_Integration_Services'
        },
        {
            id: 4,
            image: 'assets/services-logo-resources/supporting.png',
            title: t('services.support'),
            description: t('services.supportDescription'),
            link: 'https://savvycomsoftware.com/blog/ongoing-software-maintenance-and-support/'
        },        
        {
            id: 5,
            image: 'assets/services-logo-resources/consulting.jpg',
            title: t('services.consulting'),
            description: t('services.consultingDescription'),
            link: 'https://www.consultancy.in/career/what-is-consulting'
        },
        {
            id: 6,
            image: 'assets/services-logo-resources/training.jpg',
            title: t('services.training'),
            description: t('services.trainingDescription'),
            link: 'https://www.hrresolutions.com/blog/the-difference-between-onboarding-and-training/#:~:text=Training%20covers%20the%20technicalities%20or,management%2C%20and%20the%20corporate%20culture.'
        }
    ];

    return (
        <>
            {/* <Helmet>
                <title>Service</title>
                <meta name="description" content="Service For InnovaraShopix" />
            </Helmet> */}
            <section id="services" >
                <h2 className='cardo-regular'>{t('services.title')}</h2>
                <p className='cardo-regular' dangerouslySetInnerHTML={{ __html: t('services.description') }} />
                <div className="menu-item dm-sans-title">
                    {servicesData.map(service => (
                        <div className='menu-container' key={service.id}>
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
                                    You Need To Know More ? <a target='_blank' href={service.link}>Here</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;