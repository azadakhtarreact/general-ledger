
import { Fragment } from 'react'
// import { Helmet, HelmetProvider } from 'react-helmet-async';

// Custom Component
// import Layout from "../../components/layout/layout";
import Home from '../../components/Table/index'

function HomePage() {
  return ( 
    // <HelmetProvider>
    //     <Helmet>
    //         <title>Home Page</title>
    //     </Helmet>
    //     <Layout>
    //         <Home />
    //     </Layout>
    // </HelmetProvider>
    <Fragment>
      {/* <Layout>
           
        </Layout> */}
         <Home />
    </Fragment>

  );
}

export default HomePage;
