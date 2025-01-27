import React from 'react';

const AboutCardComponent = ({ card, t }) => {
    return (
        <div className="col-md-6">
            <div className="card m-1">
                <div className="card-body">
                    <h5 className="card-title"><strong>{t(card.title)}</strong></h5>
                    {card.description ? (
                        <p className="card-text about-small-font">
                            {t(card.description)}
                        </p>
                    ) : (
                        <div className="card-text about-small-font">
                            <ul>
                                {card.list.map((item, idx) => (
                                    <li key={idx}>
                                        <strong>{t(item.title)}</strong>: {t(item.description)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutCardComponent;