import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getCookie, hasCookie } from 'cookies-next';

const  Home = () => {
  const token = getCookie('authToken');

return(
  <div> 
    <Header/>
  <div className='flex'>
    <div className='h-screen'>
    <h1>Pagina Pricipale</h1>
    <div>
      // Il valore del token è accessibile qui
      {token && <p>Token: {token}</p>}
    </div>
    </div>
  </div>
    <Footer/>
  </div>
)
};

export default Home;