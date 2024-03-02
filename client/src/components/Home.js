import React from 'react';
import backgroundImage from '../Images/home.jpg';

const Home = () => {
  return (
    <div className="relative h-screen flex justify-center">
      <img src={backgroundImage} alt="Background" className="absolute w-auto h-auto" />
      <div className="z-10">
        <h1 className="text-black text-4xl font-bold"></h1>
      </div>
    </div>
  );
};

export default Home;
