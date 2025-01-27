import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import { useTranslation } from 'react-i18next';
import SupportComponent from '../components/support/supportComponent/SupportComponent';

const SupportPage = ({id}) => {

    const { t } = useTranslation();

    return (
        <PageContainer id={id} title='support.title' description='support.introPart1'>
            <SupportComponent id={id} t={t} />
        </PageContainer>
    );
};

export default SupportPage;