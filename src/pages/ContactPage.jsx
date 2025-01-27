import React from 'react';
import ContactComponent from '../components/contact/contactComponent/ContactComponent';
import { useTranslation } from 'react-i18next';

const ContactPage = ({ id }) => {

    const { t } = useTranslation();

    return (
        <ContactComponent id={id} t={t} />
    );
};

export default ContactPage;