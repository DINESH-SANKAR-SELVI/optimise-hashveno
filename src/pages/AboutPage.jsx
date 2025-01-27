import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import AboutComponent from '../components/About/AboutComponent/AboutComponent';
import { useTranslation } from 'react-i18next';

const AboutPage = ({id}) => {

    const { t } = useTranslation();

    return (
        <PageContainer id={id} title='about.title' description='about.description'>
            <AboutComponent id={id} t={t} />
        </PageContainer>
    );
};

export default AboutPage;