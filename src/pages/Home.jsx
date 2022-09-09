import React from 'react';

import video from '../assets/stars.mp4';

import Header from '../components/Header';
import SolarSystem from '../components/SolarSystem';

function Home() {
  return (
    <>
      <video autoPlay muted loop id="stars">
        <source src={video} type="video/mp4" />
      </video>
      <Header />
      <SolarSystem />
    </>
  );
}

export default Home;
