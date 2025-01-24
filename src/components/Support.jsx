import React from 'react';
import '../styles/Support.css';
import '../styles/Fonts.css';
import { useTranslation } from 'react-i18next';

const Support = () => {
    const { t } = useTranslation();

    return (
        <section id='support'>
            <div className="support-container cardo-regular">
                <h2 className="support-heading">{t('support.title')}</h2>
                <p className="support-paragraph">
                    {t('support.introPart1')} <strong>{t('support.companyName')}</strong>, {t('support.introPart2')}
                </p>

                <div className="support-flex-container">
                    <div>
                    <img src='assets//supports-resources/support2.jpg' alt='Helping Hands' className="support-image" />
                    </div>
                    <div style={{width:'60%'}}>
                        <h3 className="support-subheading">{t('support.whySupport.title')}</h3>
                        <ul className="support-list">
                            <li>{t('support.whySupport.item1')}</li>
                            <li>{t('support.whySupport.item2')}</li>
                            <li>{t('support.whySupport.item3')}</li>
                            <li>{t('support.whySupport.item4')}</li>
                        </ul>
                    </div>
                </div>

                <div className="support-flex-container">
                    <div  style={{width:'60%'}}>
                        <h3 className="support-subheading">{t('support.howToSupport.title')}</h3>
                        <ul className="support-list">
                            <li>{t('support.howToSupport.item1')}</li>
                            <li>{t('support.howToSupport.item2')}</li>
                            <li>{t('support.howToSupport.item3')}</li>
                            <li>{t('support.howToSupport.item4')}</li>
                        </ul>
                    </div>
                    <div>
                    <img className="support-image" src='assets//supports-resources/how-support.jpg' alt='How Support' />
                    </div>
                </div>

                <h3 className="support-subheading">{t('support.thankYou.title')}</h3>
                <p className="support-paragraph">
                    {t('support.thankYou.message1')}
                </p>
                <p className="support-paragraph">
                    {t('support.thankYou.message2')} <strong>{t('support.companyName')}</strong>!
                </p>
            </div>
        </section>
    );
};

export default Support;