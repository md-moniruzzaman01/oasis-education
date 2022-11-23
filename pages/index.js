import BlogSeactionOfHomePage from '../src/components/HomePage/Blog';
import Layout from '../src/components/Layout/Layout'
import HomePage from '../src/views/HomePage'


export async function getStaticProps() {
  const bannerres = await fetch('http://localhost:5000/banner')
  const banner = await bannerres.json()
  const postsres = await fetch('http://localhost:5000/blog')
  const posts = await postsres.json();
  return {
    props: {
      posts,
      banner,
    },
    revalidate: 60, // In seconds
  }
}

export default function Home({ posts,banner }) {
  const bannerURL = banner[0]?.banner?.banner;
  return (
    <div>
      <Layout>
        <HomePage bannerURL={bannerURL}  />
        <BlogSeactionOfHomePage posts={posts}/>
      </Layout>
    </div>
  )
}
