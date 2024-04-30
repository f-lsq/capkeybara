import React from 'react';
import loading from '../loading.gif';
import Navbar from '../components/general/Navbar';



const HomePage = () => {
  return (
    <>
      <Navbar/>
      <h1>Home</h1> 
      {/* <img src={loading} className="App-logo" alt="loading" /> */}
    </>
  )
}

export default HomePage;