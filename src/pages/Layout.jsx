import React from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import Banner from '../components/Banner';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='font-sora relative  '>
          <main className='p-8 max-w-[1280px] mx-auto ' >
          <Navbar></Navbar>
           
           <Outlet></Outlet>
          </main>
           <Footer></Footer>

            
        </div>
    );
};

export default Layout;