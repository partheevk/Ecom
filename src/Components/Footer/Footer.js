import React from 'react'
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter,AiOutlineMail} from 'react-icons/ai'
import './Footer.scss'
import creditcard from '../../assests/creditcardicons.png'

function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow US</h3>
            <ul className='follow'>
              <li className='hover-link center'><AiOutlineInstagram/></li>
              <li className='hover-link center'><AiOutlineFacebook/></li>
              <li className='hover-link center'><AiOutlineTwitter/></li>
              <li className='hover-link center'><AiOutlineMail/></li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">Our Company</h3>
            <ul className="company">
              <li className="hover-link">Contact US</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Return and Exchange Policy</li>
              <li className="hover-link">Shipping policy</li>
              <li className="hover-link">Terms & conditions</li>
            </ul>
          </div>
        </div>
        <div className="subfooter center">
          <div className="credit-card-img">
            <img src={creditcard} alt="" />
          </div>
          <p>Copyright {new Date().getFullYear()} © <strong>Posterz.</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Footer