import React from 'react';
import TeamCardComponent from '../teamCardComponent/TeamCardComponent';
import './TeamComponent.css';

const TeamComponent = ({ t }) => {

    const teamMembers = [
        { name: t('team.name1'), title: t('team.title1'), image: 'assets/team-resources/founder-hashveno-crop.jpg', expolreLink: 'https://dinesh-sankar-selvi.github.io/DINESH-SANKAR/' },
        { name: t('team.name2'), title: t('team.title2'), image: 'assets/team-resources/kuringi-hashveno.jpg', expolreLink: '' },
        { name: t('team.name3'), title: t('team.title3'), image: 'assets/team-resources/bond-james.png', expolreLink: 'https://en.wikipedia.org/wiki/James_Bond' },
    ];

    const openExploreLink = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className="team-container">
            {teamMembers.map((member, index) => (
                <TeamCardComponent key={index} member={member} openExploreLink={openExploreLink} />
            ))}
        </div>
    );
};

export default TeamComponent;