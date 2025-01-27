import React from 'react';
import PageContainer from '../Wrapper/PageContainer';
import BlogComponent from '../components/blog/blogComponent/BlogComponent';
import { useTranslation } from 'react-i18next';

const BlogPage = ({id}) => {

    const { t } = useTranslation();

    return (
        <PageContainer id={id} title='articles.title' description=''>
            <BlogComponent id={id} t={t} />
        </PageContainer>
    );
};

export default BlogPage;