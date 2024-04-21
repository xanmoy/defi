import React from 'react';
import '../styles/ho.css';
import illustration from '../illustration.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const detail = ()=>{
    navigate('/signin')
  }
  return (
    <>
   <div className="container3">
        <main>
          <div className="container">
            <p className="main">Unlocking Financial<br />Freedom,<br />Explore Decentralized<br />Finance</p>
            <p className="subline">Empower Yourself with Borderless Transactions,<br />Yield Farming, and More</p>
            <button onClick={detail}>Get Started</button>
          </div>
          <div className="container2">
            <img src={illustration} alt="illustration" /> 
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
