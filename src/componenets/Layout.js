import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCarousel from './CustomCarousel';

const Layout = () => {
  return (
    <>
        <CustomCarousel/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout