import React from 'react';
import Navbar from '../components/general/Navbar';
import Shop from '../components/general/Shop';
import ShopSidebar from '../components/general/ShopSidebar';

const ShopPage = () => {
  return (
    <>
      <Navbar/>
      <ShopSidebar/><Shop/>
    </>
  )
}

export default ShopPage;