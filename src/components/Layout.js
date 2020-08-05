import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import '../styles/layout.css'

function Layout({children, title}){
  const default_title = process.env.NEXT_PUBLIC_TITLE
  const default_site_name = process.env.NEXT_PUBLIC_SITE_NAME
  const default_url = process.env.NEXT_PUBLIC_URL
  const description = process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION
  return (
    <div id="root">
      <Head>
        <title>{title || `${default_title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="og:site_name" content={default_site_name} />
        <meta name="title" content={default_title} />
        <meta name="description" content={description} />
        <meta property="og:url" content={default_url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={default_title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://github.com/aaronbae/aaronbae.com/blob/master/aaronbae.com.screencapture.PNG" />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main id="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout