import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterComponent from '../components/footer/footerComponent/FooterComponent';

const FooterPage = ({id}) => {

    const { t } = useTranslation();

    return (
            <FooterComponent id={id} t={t} />
    );
};

export default FooterPage;