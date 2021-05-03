import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>My name is Jon. I was born in the UK and currently living in Germany.</p>
//         <p>I'm a Web Developer currently working at the Max Planck Institute for Intelligent Systems.</p>
//         <p>When I'm not working, playing with my children or travelling in my van, I can be found in the forest running, riding my motorbike or in my garage making things.</p>
//       </section>
//     </Layout>
//   )
// }


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Jon. I was born in the UK and currently living in Germany.</p>
        <p>I'm a Web Developer currently working at the Max Planck Institute for Intelligent Systems.</p>
        <p>When I'm not working, playing with my children or travelling in my van, I can be found in the forest running, riding my motorbike or in my garage making things.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          

            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}