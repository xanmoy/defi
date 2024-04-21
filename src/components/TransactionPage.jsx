import React, { useState } from 'react';
import '../styles/TransactionPage.css'; // Import CSS file for form styling

const TransactionPage = () => {
  const [accountAddress, setAccountAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(1000.0922); // Initial balance

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for transferring amount
    if (parseInt(amount) <= balance) {
      const newBalance = balance - parseInt(amount);
      setBalance(newBalance);
      console.log('Transfer initiated:');
      console.log('Account Address:', accountAddress);
      console.log('Amount:', amount);
      console.log('New Balance:', newBalance);
    } else {
      console.log('Insufficient balance');
    }
  };

  const handleConnect = () => {
    // Add logic to connect with MetaMask
    alert('Connecting with MetaMask...');
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Transfer Form</h2>
        <div className="form-group">
          <label htmlFor="accountAddress">Account Address:</label>
          <input
            type="text"
            id="accountAddress"
            value={accountAddress}
            onChange={(e) => setAccountAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          /> 
        </div>
        <div className="btn-group">
          <button type="submit" className="btn">Transfer</button>
          <button type="button" className="btn" onClick={handleConnect}>Connect with MetaMask</button>
        </div>
      </form>
      <div className="body">
        <div className="pricing-card">
          <h3 className="pricing-card-title">Your Balance</h3>
          <p className="pricing-card-description">{balance}</p>
          {/* Optionally, format the balance for display */}
          <div className="pricing-card-price">{balance.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
