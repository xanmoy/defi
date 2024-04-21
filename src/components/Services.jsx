import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/service.css'
import bitcoin from "../bitcoin.png"
import etherium from "../etherium.png"
import plus from "../plus.png";
import swap from "../swap.png";
import arrow1 from "../arrow1.png"


const Services = () => {
  const navigate = useNavigate();
  const Sendmoney=()=>{
    navigate('/transaction');
  }
  return (
    <>
       <div className="body">
      <div className="pricing-card">
        <h3 className="pricing-card-title">Your Balance</h3>
        <p className="pricing-card-description">1000.0922</p>
        <div className="pricing-card-price">28.320</div>
      </div>
    </div>
    <div className="buttons-container">
      <button className="square-button" onClick={Sendmoney}>
        <div className="button-content">
          <img className="button-icon" src={arrow1} alt="plus" style={{ width: '2rem', height: '2rem' ,transform: 'rotate(180deg)' }}/>
          <div className="button-text" >Send</div>
        </div>
      </button>
      <button className="square-button">
        <div className="button-content">
          <img className="button-icon" src={arrow1} alt="plus" style={{ width: '2rem', height: '2rem' }} />
          <div className="button-text">Receive</div>
        </div>
      </button>
      <button className="square-button">
        <div className="button-content">
          <img className="button-icon"  src={swap} alt="plus" style={{ width: '2rem', height: '2rem' }}/>
          <div className="button-text">Swap</div>
        </div>
      </button>
      <button className="square-button">
        <div className="button-content">
          <img className="button-icon" src={plus} alt="plus" />
          <div className="button-text">Buy</div>
        </div>
      </button>
    </div>
    <div className='container'>
      <div className="assets">
        <span className='ps1'>Assets</span>
        <span className='ps2'>See All</span>
      </div>
      <div className="products">
        <div className="pr">
        <div className="pro">
          <div className="icon">
            <img src ={bitcoin} alt="bitcoin" style={{ width: '2rem', height: '2rem' }} />
          </div>
          <div className="pp">
          <div className="p">
            <span className="pname">
              Bitcoin
            </span>
            <span className='pnames'>
              BTC
            </span>
          </div>
          <div className="price">
          <span className="pr1">
              Price
            </span>
            <span className='pr2'>
              Number
            </span>
          </div>
          </div>
        </div>
        <div className="pro">
          <div className="icon">
            <img src ={etherium} alt="bitcoin" style={{ width: '2rem', height: '2rem' }} />
          </div>
          <div className="pp">
          <div className="p">
            <span className="pname">
              Bitcoin
            </span>
            <span className='pnames'>
              BTC
            </span>
          </div>
          <div className="price">
          <span className="pr1">
              Price
            </span>
            <span className='pr2'>
              Number
            </span>
          </div>
          </div>
        </div>
        <div className="pro">
          <div className="icon">
            <img src ={etherium} alt="bitcoin" style={{ width: '2rem', height: '2rem' }} />
          </div>
          <div className="pp">
          <div className="p">
            <span className="pname">
              Bitcoin
            </span>
            <span className='pnames'>
              BTC
            </span>
          </div>
          <div className="price">
          <span className="pr1">
              Price
            </span>
            <span className='pr2'>
              Number
            </span>
          </div>
          </div>
        </div>
        <div className="pro">
          <div className="icon">
            <img src ={etherium} alt="bitcoin" style={{ width: '2rem', height: '2rem' }} />
          </div>
          <div className="pp">
          <div className="p">
            <span className="pname">
              Bitcoin
            </span>
            <span className='pnames'>
              BTC
            </span>
          </div>
          <div className="price">
          <span className="pr1">
              Price
            </span>
            <span className='pr2'>
              Number
            </span>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
