import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layout({children, title}){
  const description = process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION
  return (
    <div>
      <Head>
        <title>{title || "AaronBae | Software Engineer"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="og:site_name" content="AaronBae.com" />
        <meta name="title" content="AaronBae | Software Engineer" />
        <meta name="description" content={description} />
        <meta property="og:url" content={"https://www.aaronbae.com/"} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AaronBae | Software Engineer" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://github.com/aaronbae/aaronbae.com/blob/master/aaronbae.com.screencapture.PNG" />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout