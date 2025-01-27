import React from 'react';
import FAQComponent from '../../FAQ/FAQComponent/FAQComponent';
import AboutCardComponent from '../AboutCard/AboutCardComponent';

const cardData = [
    {
        title: 'about.mission',
        description: 'about.missionDescription',
    },
    {
        title: 'about.ourApproach',
        description: 'about.ourApproachDescription',
    },
    {
        title: 'about.whyChooseUs',
        description: null,
        list: [
            { title: 'about.innovation', description: 'about.innovationDescription' },
            { title: 'about.expertTeam', description: 'about.expertTeamDescription' },
            { title: 'about.customerFocus', description: 'about.customerFocusDescription' },
        ],
    },
    {
        title: 'about.whatWeDo',
        description: null,
        list: [
            { title: 'about.customcloudSoftware', description: 'about.customcloudSoftwareDescription' },
            { title: 'about.integrationServices', description: 'about.integrationServicesDescription' },
            { title: 'about.support', description: 'about.supportDescription' },
        ],
    },
    {
        title: 'about.joinUs',
        description: 'about.joinUsDescription',
    },
    {
        title: 'about.getInTouch',
        description: 'about.contact',
    },
];

// Function to group cards into pairs
const groupCards = (cards) => {
    const grouped = [];
    for (let i = 0; i < cards.length; i += 2) {
        grouped.push(cards.slice(i, i + 2));
    }
    return grouped;
};

const AboutComponent = ({id, t }) => {

    const groupedCardData = groupCards(cardData);

    return (
        <>
            <div className="container" id={id}>
                {groupedCardData.map((cardPair, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {cardPair.map((card, cardIndex) => (
                            <AboutCardComponent key={cardIndex} card={card} t={t} />
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <FAQComponent />
            </div>

            {/* <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=390&amp;height=258&amp;hl=en&amp;q=ANNANAGAR&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>


            <div className="video-responsive">
                <iframe src="https://www.youtube.com/embed/E8rHAPN__4c?si=kbIi81t4dVbkJkua" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
        </>
    );
};

export default AboutComponent;