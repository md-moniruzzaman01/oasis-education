
import Layout from '../src/components/Layout/Layout'
import HomePage from '../src/views/HomePage'


export async function getStaticProps() {
  const bannerres = await fetch('https://oasis-backend.onrender.com/api/v1/banner')
  const banner = await bannerres.json()
  return {
    props: {
      banner,
    },
    revalidate: 60, // In seconds
  }
}

export default function Home({banner}) {
  const bannerURL = banner.data[0].banner.banner;
  return (
    <div>
      <Layout>
        <HomePage bannerURL={bannerURL}  />
      </Layout>
    </div>
  )
}
