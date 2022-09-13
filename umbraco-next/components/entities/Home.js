import Head from 'next/head'
import { Hero } from '../blocks'

export default function Home ({ view }) {
  return (
    <>
      <Head>
        <title>{view.heroHeader}</title>
        <meta description={view.heroDescription}/>
      </Head>

      <main>
        <Hero block={{
          heroHeader: view.heroHeader,
          heroDescription: view.heroDescription,
          heroCTACaption: view.heroCTACaption,
          heroCTALink: view.heroCTALink
        }} />
      </main>
    </>
  )
}
