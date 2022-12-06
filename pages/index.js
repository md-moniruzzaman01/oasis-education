
import Layout from '../src/components/Layout/Layout'
import HomePage from '../src/views/HomePage'


export async function getStaticProps() {
  const bannerres = await fetch('http://localhost:5000/banner')
  const banner = await bannerres.json()
  return {
    props: {
      banner,
    },
    revalidate: 60, // In seconds
  }
}

export default function Home({banner }) {
  const bannerURL = banner[0]?.banner?.banner;
  return (
    <div>
      <Layout>
        <HomePage bannerURL={bannerURL}  />
      </Layout>
    </div>
  )
}
