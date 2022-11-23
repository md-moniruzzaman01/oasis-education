import React from 'react';
import Layout from '../src/components/Layout/Layout';
import BlogePage from '../src/views/BlogePage';

export async function getStaticProps() {

    const postsres = await fetch('http://localhost:5000/blog')
    const posts = await postsres.json();
    return {
      props: {
        posts,
      },
      revalidate: 60, // In seconds
    }
  }
const blog = ({posts}) => {
    return (
        <div>
             <Layout>
            <BlogePage posts={posts}/>
            </Layout>
        </div>
    );
};

export default blog;