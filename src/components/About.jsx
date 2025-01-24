import React from 'react';
// import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import FAQ from './FAQ';
import '../styles/About.css';

const About = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className='cardo-regular'>
            <div className="container">
                <h2 className='cardo-regular'>{t('about.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('about.welcome') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
                <div className="row">
                    <div className="col-md-6">
                        <div className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{t('about.mission')}</strong></h5>
                                <p className="card-text about-small-font">
                                    {t('about.missionDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{t('about.ourApproach')}</strong></h5>
                                <p className="card-text about-small-font">
                                    {t('about.ourApproachDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{t('about.whyChooseUs')}</strong></h5>
                                <div className="card-text about-small-font">
                                    <ul>
                                        <li><strong>{t('about.innovation')}</strong>: {t('about.innovationDescription')}</li>
                                        <li><strong>{t('about.expertTeam')}</strong>: {t('about.expertTeamDescription')}</li>
                                        <li><strong>{t('about.customerFocus')}</strong>: {t('about.customerFocusDescription')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{t('about.whatWeDo')}</strong></h5>
                                <div className="card-text about-small-font">
                                    <ul>
                                        <li><strong>{t('about.customcloudSoftware')}</strong>: {t('about.customcloudSoftwareDescription')}</li>
                                        <li><strong>{t('about.integrationServices')}</strong>: {t('about.integrationServicesDescription')}</li>
                                        <li><strong>{t('about.support')}</strong>: {t('about.supportDescription')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{t('about.joinUs')}</strong></h5>
                                <p className="card-text about-small-font">
                                    {t('about.joinUsDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{t('about.getInTouch')}</strong></h5>
                                <p className="card-text about-small-font">
                                    {t('about.contact')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FAQ />
            </div>

            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=390&amp;height=258&amp;hl=en&amp;q=ANNANAGAR&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>


<iframe width="560" height="315" src="https://www.youtube.com/embed/E8rHAPN__4c?si=kbIi81t4dVbkJkua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>
    );
};

export default About;