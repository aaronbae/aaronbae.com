import Header from "../library/common/header.js"
import '../library/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <div id="root">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
