import React, { useState } from 'react';
import '../styles/ContactDesign.css';
import { FaInbox, FaLocationArrow, FaMobile, FaPaperPlane, FaUser, FaWeixin } from 'react-icons/fa';
// import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
        // emailjs
        //     .send('service_j1t3w5f', 'template_fzmhjed', formData, 'yFTzYFwXXo4oEIC9k')
        //     .then((response) => {
        //         console.log('SUCCESS!', response.status, response.text);
        //         // Optionally reset the form
        //         setFormData({ name: '', email: '', message: '' });
        //         setShowPopup(true);
        //     })
        //     .catch((err) => {
        //         console.error('FAILED...', err);
        //     });
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const { t } = useTranslation();

    return (
        <>
            {/* <Helmet>
            <title>{t('contact.title')}</title>
            <meta name="description" content={t('contact.description')} />
        </Helmet> */}
            <section id="contact" className='text text-center cardo-regular'>
                <div className="contact-form">
                    <div className='contact-title-description-container'>
                        <h2>{t('contact.title')}</h2>
                        <p>
                            {t('contact.description')}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className='label-container'>
                                <div className='label-logo-container'>
                                    <FaUser className='icon contact-icon' />
                                </div>
                                <label htmlFor="fullName">{t('contact.fullname')}</label>
                            </div>
                            <input
                                className='input-field'
                                placeholder={t('contact.examplefullname')}
                                type="text"
                                id="fullName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <div className='label-container'>
                                <div className='label-logo-container'>
                                    <FaLocationArrow className='icon contact-icon' />
                                </div>
                                <label htmlFor="email">{t('contact.emailaddress')}</label>
                            </div>
                            <input
                                className='input-field'
                                placeholder={t('contact.exampleemailaddress')}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <div className='label-container'>
                                <div className='label-logo-container'>
                                    <FaWeixin className='icon contact-icon' />
                                </div>
                                <label htmlFor="message">{t('contact.message')}</label>
                            </div>
                            <textarea
                                className='input-field'
                                placeholder={t('contact.examplemessage')}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className='submit-button'>{t('contact.sendmessage')}  <FaPaperPlane className="icon m-1" /></button>
                    </form>

                    {showPopup && (
                        <div className="contact-popup">
                            <div className="contact-popup-content">
                                <span className="contact-close" onClick={closePopup}>&times;</span>
                                <p>Email sent successfully!</p>
                            </div>
                        </div>
                    )}

                    <div className="contact-info">
                        <div className='d-flex justify-content-center align-items-center'>
                            <FaInbox className='icon' />
                            <h3>{t('contact.email')}</h3>
                        </div>
                        <p>support@hashveno.com</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <FaMobile className='icon' />
                            <h3>{t('contact.phone')}</h3>
                        </div>
                        <p>+91 733 733 7333</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;