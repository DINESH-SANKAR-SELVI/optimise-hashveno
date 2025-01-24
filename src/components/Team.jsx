import React from 'react';
import '../styles/Team.css';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Team = () => {
    
    const { t } = useTranslation();

    const teamMembers = [
        { name: t('team.name1'), title: t('team.title1'), image: 'assets/team-resources/founder-hashveno-crop.jpg', expolreLink: 'https://dinesh-sankar-selvi.github.io/DINESH-SANKAR/' },
        { name: t('team.name2'), title: t('team.title2'), image: 'assets/team-resources/kuringi-hashveno.jpg', expolreLink: '' },
        { name: t('team.name3'), title: t('team.title3'), image: 'assets/team-resources/bond-james.png', expolreLink: 'https://en.wikipedia.org/wiki/James_Bond' },
    //ABISHEK
    ];

    const openExploreLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <>
            <section id="team">
                <div className="team-heading cardo-regular">
                    <h2>{t('team.title')}</h2>
                    <p className='text text-center'>{t('team.description')}</p>
                </div>
                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-card-inner">
                                <div className="team-box">
                                    <div className="team-img-box">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-icon">
                                        <span>
                                            <a onClick={() => openExploreLink(member.expolreLink)}>
                                                <i><FaArrowRight /></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>{member.name}</h3>
                                <p>{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Team;