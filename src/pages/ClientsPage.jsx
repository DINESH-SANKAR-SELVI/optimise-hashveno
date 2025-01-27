import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import ClientsComponent from '../components/clients/clientsComponent/ClientsComponent';

const ClientsPage = ({id}) => {

    return (
        <PageContainer id={id} title='client.title' description='client.description'>
            <ClientsComponent id={id} />
        </PageContainer>
    );
};

export default ClientsPage;