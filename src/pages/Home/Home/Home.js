import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import PublicReview from '../PublicReview/PublicReview';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Product></Product>
                  <PublicReview />
                  <ExtraSection></ExtraSection>
                  <Footer></Footer>
            </div>
      );
};

export default Home;