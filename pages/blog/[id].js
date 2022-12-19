import React from 'react';
import SingleBlogDetailsPage from '../../src/components/Blog Details';
import Layout from '../../src/components/Layout/Layout';

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://oasis-backend.onrender.com/api/v1/blogs/${id}`);
  const data = await res.json();
  return {
    props: {post:data.data},
  };
};

export async function getStaticPaths() {
  const res = await fetch(`https://oasis-backend.onrender.com/api/v1/blogs`);
  const post = await res.json();
  const paths = post.data.map(data=>{
    return {
      
      params:{id:data._id.toString()}
    }
  })
  return {
    paths,
    fallback: false,
  };
}
const SingleBlogPage = ({post}) => {
  // const router = useRouter();
  // if (router.isFallback)  return <div>Loading...</div>;
    return (
        <div>
             <Layout>
           <SingleBlogDetailsPage post={post}/>
            </Layout>
        </div>
    );
};







  



export default SingleBlogPage;