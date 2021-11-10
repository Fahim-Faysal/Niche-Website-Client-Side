import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Product></Product>
                  <ExtraSection></ExtraSection>
                  <Footer></Footer>
            </div>
      );
};

export default Home;