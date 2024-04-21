import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="body">
      <div className="pricing-card">
        <h3 className="pricing-card-title">Your Balance</h3>
        <p className="pricing-card-description">{balance}</p>
        
         <div className="pricing-card-price">{balance.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Balance;
