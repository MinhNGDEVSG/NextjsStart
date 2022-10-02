import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
    <Layout>
      {/* đang là con of Layout */}
      <Component {...pageProps} /> 
    </Layout>
    </div>
  );
}

export default MyApp


//Layout đang gói toàn bộ app => app là con: children of Layout;