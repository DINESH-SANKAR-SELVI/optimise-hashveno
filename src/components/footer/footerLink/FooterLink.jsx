import React from 'react';

const FooterLink = ({ title, links }) => {
    return (
        <div className="col-sm-6 col-md mb-4 mb-md-0">
            <h3>{title}</h3>
            <ul className="list-unstyled nav-links">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} onClick={link.onClick}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLink;