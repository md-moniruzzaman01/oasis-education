import React from 'react';
import Layout from '../src/components/Layout/Layout';
import RegisterPage from '../src/components/Register';

const register = () => {
    return (
        <div>
             <Layout>
            <RegisterPage/>
            </Layout>
        </div>
    );
};

export default register;