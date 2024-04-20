import React from 'react';
import illustration from '../illustration.png';
import '../styles/ho.css';
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-5xl mx-auto p-8 lg:p-0 lg:flex lg:justify-between">
        <div className="text-white lg:w-1/2 lg:pr-16">
          <p className="text-4xl lg:text-6xl font-bold mb-4">Unlocking Financial<br />Freedom,<br />Explore Decentralized<br />Finance</p>
          <p className="text-lg pt-1 lg:text-xl">Empower Yourself with Borderless Transactions,<br />Yield Farming, and More</p>
          <button className=" bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-6 mt-4 rounded-full">Get Started</button>
        </div>
        <div className="lg:w-1/2 lg:pl-16">
          <img src={illustration} alt="illustration" className="mx-auto lg:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
