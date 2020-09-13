import Router from "next/router";
import withGA from "next-ga";
import { Provider } from 'react-redux'
import { useStore } from '../redux/Store'
import Layout from "../components/Layout"
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default withGA("UA-172945895-1", Router)(MyApp);
