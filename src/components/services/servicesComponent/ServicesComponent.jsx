import React from 'react';
import ServiceCardComponent from '../serviceCard/ServiceCardComponent'; 
import './ServicesComponent.css';

const ServicesComponent = ({id, t}) => {

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
        <div id={id} className="menu-item dm-sans-title">
            {servicesData.map(service => (
                <ServiceCardComponent key={service.id} service={service} />
            ))}
        </div>
    );
};

export default ServicesComponent;