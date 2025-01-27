import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import ConstructionComponent from '../components/construction/constructionComponent/ConstructionComponent';

const ConstructionPage = ({id}) => {

    return (
        <PageContainer id={id} title='' description=''>
            <ConstructionComponent id={id} />
        </PageContainer>
    );
};

export default ConstructionPage;