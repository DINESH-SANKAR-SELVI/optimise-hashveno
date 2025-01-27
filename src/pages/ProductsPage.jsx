import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import ProductsComponent from '../components/products/productsComponent/ProductsComponent';

const ProductsPage = ({id}) => {


    return (
        <PageContainer id={id} title='products.title' description='products.description'>
            <ProductsComponent id={id} />
        </PageContainer>
    );
};

export default ProductsPage;