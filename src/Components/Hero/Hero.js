import React from 'react'
import './Hero.scss'
import {useNavigate} from 'react-router'

function Hero() {
  const navigate=useNavigate();
  return (
    <div className='Hero'>
      <div className="hero-content center">
        <h1 className='heading'>Exclusive Print And ArtWork</h1>
        <p className='sub-heading'>
          Exclusive Art pieces, for Exclusive Prices
        </p>
        <button onClick={()=>navigate('/category')} className='cta btn-primary'>Explore all</button>
      </div>
    </div>
  )
}

export default Hero