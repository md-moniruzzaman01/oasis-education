import React from 'react';
import Layout from '../src/components/Layout/Layout';
import BlogePage from '../src/views/BlogePage';

// export async function getStaticProps() {

//     const postsres = await fetch(`https://oasis-backend.onrender.com/api/v1/blogs?limit=${5}`)
//     const posts = await postsres.json();
//     return {
//       props: {
//         posts,
//       },
//       revalidate: 60, // In seconds
//     }
//   }
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