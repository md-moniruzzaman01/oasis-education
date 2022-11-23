import React from 'react';
import Layout from '../../src/components/Layout/Layout';

// const data = fetch('http://localhost:5000/blog').then(res=>res.json()).then(data=> data);
// export const getStaticPaths = async () => {
// console.log(data);
//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
// }

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/blog/${params.id}`);
    const post = await res.json();
    return {
      props: { ...post },
    };
  };

const SingleBlogPage = ({post}) => {
console.log(post);
    return (
        <div>
             <Layout>
            df
            </Layout>
        </div>
    );
};








export async function getStaticPaths() {
   
    const res = await fetch('http://localhost:5000/blog')
    const post = await res.json()
console.log(post);
    const pathsWithParams = post.map((star) => ({ params: { id: star._id}}))
 
    return {
        paths: pathsWithParams,
        fallback: true
    }
  }
  
  
//   export async function getStaticProps({ params }) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const post = await res.json()
  
//     return { props: { post } }
//   }












export default SingleBlogPage;