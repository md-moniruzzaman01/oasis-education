
export const GetFetch= async (url)=>{
    return fetch(url)
    .then(response => {
            return response;
            }
          );

 }

// export async function getStaticProps() {

//     const postsres = await fetch('http://localhost:5000/blog')
//     const posts = await postsres.json();
//     return {
//       props: {
//         posts,
//       },
//       revalidate: 60, // In seconds
//     }
//   }