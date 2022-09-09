import React from 'react';
import Header from '../components/Header';
import video from '../assets/stars.mp4';

function Home() {
  return (
    <>
      <video autoPlay muted loop id="stars">
        <source src={video} type="video/mp4" />
      </video>
      <Header />
    </>
  );
}

export default Home;
