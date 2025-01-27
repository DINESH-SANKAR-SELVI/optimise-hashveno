import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './TeamCardComponent.css';

const TeamCardComponent = ({ member, openExploreLink }) => {
    return (
        <div className="team-card">
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
            <div className="team-content roboto-medium-italic">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
            </div>
        </div>
    );
};

export default TeamCardComponent;