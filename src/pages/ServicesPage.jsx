import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import { useTranslation } from 'react-i18next';
import ServicesComponent from '../components/services/servicesComponent/ServicesComponent';
const ServicesPage = ({id}) => {

    const { t } = useTranslation();

    return (
        <PageContainer id={id} title='services.title' description='services.description'>
            <ServicesComponent id={id} t={t} />
        </PageContainer>
    );
};

export default ServicesPage;