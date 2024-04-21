import React from 'react';
import '../styles/AboutUsPage.css';
import mobile from '../mobile.jpeg'


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="panel1">
        <div className="section">
          <h2>About Our DeFi Platform</h2>
          <p>
            Welcome to our decentralized finance (DeFi) platform! We aim to revolutionize the traditional financial system by providing accessible, transparent, and decentralized financial services to everyone, anywhere in the world.
          </p>
          <p>
            Our platform leverages blockchain technology to eliminate intermediaries, reduce costs, and increase financial inclusion. Whether you're looking to borrow, lend, trade, or invest, our DeFi solutions empower you to take control of your finances with greater security and efficiency.
          </p>
        </div>
        <div className="photosec">
          <img src={mobile} alt="" width={500} />
        </div>
      </div>
      <div className="panel1">
      <div className="image">
          <img src={mobile} alt="Mission" width={500} />
        </div>
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to democratize finance and build a more inclusive global economy. We believe that everyone, regardless of their background or location, should have access to the same financial opportunities and services. By embracing decentralization, transparency, and innovation, we're working towards a future where financial services are borderless, permissionless, and fair for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
