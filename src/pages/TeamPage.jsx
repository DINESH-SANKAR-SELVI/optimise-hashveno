import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import { useTranslation } from 'react-i18next';
import TeamComponent from '../components/team/teamComponent/TeamComponent';

const TeamPage = ({id}) => {

    const { t } = useTranslation();

    return (
        <PageContainer id={id} title='team.title' description='team.description'>
            <TeamComponent id={id} t={t} />
        </PageContainer>
    );
};

export default TeamPage;