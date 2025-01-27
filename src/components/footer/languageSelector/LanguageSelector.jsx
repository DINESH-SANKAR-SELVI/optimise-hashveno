// src/components/LanguageSelector.js
import React from 'react';

const LanguageSelector = ({ changeLanguage }) => {
    const languages = [
        { code: 'tam', name: 'தமிழ்' },
        { code: 'en', name: 'English' },
        { code: 'hin', name: 'हिन्दी' },
        { code: 'tel', name: 'తెలుగు' },
        { code: 'mal', name: 'മലയാളം' },
        { code: 'kan', name: 'ಕನ್ನಡ' },
    ];

    return (
        <div className="col-sm-6 col-md mb-4 mb-md-0">
            <h3>Languages</h3>
            <ul className="list-unstyled nav-links">
                {languages.map((lang) => (
                    <li key={lang.code}>
                        <a onClick={() => changeLanguage(lang.code)}>{lang.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSelector;