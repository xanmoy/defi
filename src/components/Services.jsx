import React from 'react';
import bitcoin from "../bitcoin.png";
import etherium from "../etherium.png";
import arrow1 from "../arrow1.png";
import swap from "../swap.png";

const Services = () => {
  return (
    <div className="bg-gradient-to-br  p-8 min-h-screen">
      {/* Pricing Card */}
      <div className="pricing-card bg-white bg-opacity-30 rounded-lg text-white text-center shadow-md p-8 mb-8">
        <h3 className="text-xl font-semibold mb-2">Your Balance</h3>
        <p className="text-5xl font-bold mb-4">60,781</p>
        <div className="text-xl">28.320</div>
      </div>

     {/* Buttons */}
<div className="flex flex-wrap justify-around mb-8">
  {/* Send Button */}
  <button className="square-button mb-4">
    <div className="button-content flex items-center">
      <img className="button-icon w-8 h-8 transform rotate-180" src={arrow1} alt="plus" />
      <div className="button-text">Send</div>
    </div>
  </button>

  {/* Receive Button */}
  <button className="square-button mb-4">
    <div className="button-content flex items-center">
      <img className="button-icon w-8 h-8" src={arrow1} alt="plus" />
      <div className="button-text">Receive</div>
    </div>
  </button>

  {/* Swap Button */}
  <button className="square-button mb-4">
    <div className="button-content flex items-center">
      <img className="button-icon w-8 h-8" src={swap} alt="plus" />
      <div className="button-text">Swap</div>
    </div>
  </button>

  {/* Buy Button */}
  <button className="square-button mb-4">
    <div className="button-content flex items-center">
      <img className="button-icon w-8 h-8" src={bitcoin} alt="plus" />
      <div className="button-text">Buy</div>
    </div>
  </button>
</div>


      {/* Assets */}
      <div className=" p-8 rounded-lg">
        <div className="flex justify-between mb-8">
          <div className="text-2xl text-white font-semibold">Assets</div>
          <div className="text-2xl text-white font-semibold">See All</div>
        </div>

        {/* Asset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bitcoin Card */}
          <div className="pro bg-white bg-opacity-30 rounded-lg text-white p-4 flex gap-4 items-center">
            <img src={bitcoin} alt="Bitcoin" className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Bitcoin</span>
              <span className="text-base">BTC</span>
            </div>
            {/* Asset details */}
          </div>

          {/* Ethereum Card */}
          <div className="pro bg-white bg-opacity-30 rounded-lg text-white p-4 flex gap-4 items-center">
            <img src={etherium} alt="Ethereum" className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Ethereum</span>
              <span className="text-base">ETH</span>
            </div>
            {/* Asset details */}
          </div>

          {/* Repeat for other assets */}
        </div>
      </div>
    </div>
  );
};

export default Services;
