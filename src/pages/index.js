import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { deleteCookie, getCookie } from 'cookies-next';



const  Home = () => {



  
return(
  
  <div> 
    <Header/>
  <div className='flex'>
    <div className='h-screen'>
    <p>CIAO</p>
    
    </div>
  </div>
    <Footer/>
  </div>
)
};



export default Home;