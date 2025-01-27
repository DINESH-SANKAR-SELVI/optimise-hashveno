import React from 'react';
import '../styles/Fonts.css';
import { useTranslation } from 'react-i18next';
import LazyLoad from './LazyLoad';

const PageContainer = ({ children, id, title='', description = '' }) => {

    const { t } = useTranslation();

    return (
        <>
            <LazyLoad id={id}>
                <section id={id} className='cardo-regular d-flex flex-column align-items-center'>
                    <h2>{t(title)}</h2>
                    <p style={{maxWidth: '80%'}} dangerouslySetInnerHTML={{ __html: t(description) }} />
                    {children}
                </section>
            </LazyLoad>
        </>
    );
};

export default PageContainer;