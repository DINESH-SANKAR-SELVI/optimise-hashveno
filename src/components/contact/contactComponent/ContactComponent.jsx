import React, { useState } from 'react';
import './ContactComponent.css';
import { FaInbox, FaLocationArrow, FaMobile, FaPaperPlane, FaUser, FaWeixin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactComponent = ({id, t}) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setShowPopup(true);
            // await emailjs
            //     .send('service_j1t3w5f', 'template_fzmhjed', formData, 'yFTzYFwXXo4oEIC9k')
            //     .then((response) => {
            //         console.log('SUCCESS!', response.status, response.text);
            //         setFormData({ name: '', email: '', message: '' });
            //         setShowPopup(true);
            //     })
            //     .catch((err) => {
            //         console.error('FAILED...', err);
            //     });;
        } catch (err) {
            console.error('FAILED...', err);
        }
    };

    const closePopup = () => setShowPopup(false);

    const renderInputField = (type, name, placeholder, label, icon) => (
        <div className="form-group">
            <div className='label-container'>
                <div className='label-logo-container'>
                    {icon}
                </div>
                <label htmlFor={name}>{t(label)}</label>
            </div>
            {type === 'textarea' ? (
                <textarea
                    className='input-field'
                    placeholder={t(placeholder)}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                />
            ) : (
                <input
                    className='input-field'
                    placeholder={t(placeholder)}
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                />
            )}
        </div>
    );

    return (
        <section id={id} className='text text-center cardo-regular'>
            <div className="contact-form">
                <div className='contact-title-description-container'>
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.description')}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {renderInputField('text', 'name', 'contact.examplefullname', 'contact.fullname', <FaUser className='icon contact-icon' />)}
                    {renderInputField('email', 'email', 'contact.exampleemailaddress', 'contact.emailaddress', <FaLocationArrow className='icon contact-icon' />)}
                    {renderInputField('textarea', 'message', 'contact.examplemessage', 'contact.message', <FaWeixin className='icon contact-icon' />)}
                    <button type="submit" className='submit-button'>
                        {t('contact.sendmessage')} <FaPaperPlane className="icon m-1" />
                    </button>
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
                    <p>+91 7604 829 520</p>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;