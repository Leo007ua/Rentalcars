import React from 'react'
import BannerImage from '../images/arenda-auto-antalya-turkey.jpg'; 

const Home = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Rental Car" className="banner-image" loading="lazy" />
      <div className="banner-content">
        <h1>Rental Car</h1>
        <p>
          Welcome to the Rental Car, your go-to solution for renting cars in the world.
        </p>
      </div>
      <p className="banner-s">Contact the company by phone number: +380730000000</p>
    </div>
  )
}

export default Home