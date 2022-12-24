import React from 'react';
import Layout from '../src/components/Layout/Layout';
import BlogePage from '../src/views/BlogePage';

const blog = () => {
    return (
        <div>
             <Layout>
            <BlogePage/>
            </Layout>
        </div>
    );
};

export default blog;