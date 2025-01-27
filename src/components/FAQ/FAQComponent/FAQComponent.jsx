import React, { useState } from 'react';
import './FAQComponent.css';
import { useTranslation } from 'react-i18next';
// import { Helmet } from 'react-helmet';

const FAQComponent = () => {
    // State to track which accordion item is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    const { t } = useTranslation();
    // Sample FAQ data
    // const faqs = [
    //     {
    //         question: "What features does the shop management system offer?",
    //         answer: "Our shop management system offers a variety of features including inventory management, sales tracking, customer relationship management, reporting and analytics, employee management, and integration with payment gateways."
    //     },
    //     {
    //         question: "How can I manage my inventory effectively?",
    //         answer: "You can manage your inventory by using our inventory tracking feature, which allows you to monitor stock levels, set reorder points, and receive alerts when items are low in stock. You can also categorize products for easier management."
    //     },
    //     {
    //         question: "Is the shop management system suitable for small businesses?",
    //         answer: "Yes, our shop management system is designed to be scalable and user-friendly, making it suitable for small businesses as well as larger enterprises. It can grow with your business needs."
    //     },
    //     {
    //         question: "Can I access the system remotely?",
    //         answer: "Yes, our shop management system is cloud-based, allowing you to access it from anywhere with an internet connection. This is particularly useful for managing your shop on the go."
    //     },
    //     {
    //         question: "What kind of support do you offer?",
    //         answer: "We offer 24/7 customer support through various channels including email, live chat, and phone. Additionally, we provide a comprehensive knowledge base and user guides to help you navigate the system."
    //     },
    //     {
    //         question: "How do I integrate the system with my existing tools?",
    //         answer: "Our shop management system supports integration with various third-party applications such as accounting software, e-commerce platforms, and payment processors. You can find detailed instructions in our integration guide."
    //     },
    //     {
    //         question: "Is my data secure with your system?",
    //         answer: "Absolutely! We prioritize data security and use industry-standard encryption protocols to protect your data. Regular backups and secure access controls are also in place to ensure your information is safe."
    //     },
    //     {
    //         question: "Can I customize the system to fit my business needs?",
    //         answer: "Yes, our shop management system is highly customizable. You can tailor features, reports, and user permissions to align with your specific business requirements."
    //     },
    //     {
    //         question: "What payment methods are supported?",
    //         answer: "Our system supports a variety of payment methods including credit/debit cards, PayPal, and other popular payment gateways. You can easily configure your preferred payment options in the settings."
    //     },
    //     {
    //         question: "How do I get started with the shop management system?",
    //         answer: "Getting started is easy! Simply sign up for an account on our website, and you will receive a step-by-step guide to set up your shop management system. Our support team is also available to assist you during the onboarding process."
    //     }
    // ];
    const faqs = [
        {
            question: t('faq.question1'),
            answer: t('faq.answer1')
        },
        {
            question: t('faq.question2'),
            answer: t('faq.answer2')
        },
        {
            question: t('faq.question3'),
            answer: t('faq.answer3')
        },
        {
            question: t('faq.question4'),
            answer: t('faq.answer4')
        },
        {
            question: t('faq.question5'),
            answer: t('faq.answer5')
        }
    ];

    const toggleAccordion = (index) => {
        // If the clicked index is already expanded, collapse it; otherwise, expand it
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            {/* <Helmet>
                <title>FAQ</title>
                <meta name="description" content="FAQ Of InnovaraShopix" />
            </Helmet> */}
            <section id="faq" style={{ padding: '20px' }}>
                <div className="faq-container cardo-regular">
                    <h2>{t('faq.title')}</h2>
                    <div className="faq-accordion">
                        {faqs.map((faq, index) => (
                            <div className="faq-accordion-item" key={index}>
                                <button
                                    id={`accordion-button-${index + 1}`}
                                    aria-expanded={expandedIndex === index}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="faq-accordion-title">{faq.question}</span>
                                    <span className="faq-icon" aria-hidden="true"></span>
                                </button>
                                {expandedIndex === index && (
                                    <div className="faq-accordion-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQComponent;