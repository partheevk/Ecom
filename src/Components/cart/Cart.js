import React from 'react'
import './Cart.scss'
import {AiOutlineClose} from 'react-icons/ai'
import CartItem from '../cartItem/CartItem'
import {useSelector} from 'react-redux'

function Cart({onClose}) {
  
  const cart=useSelector(state=>state.cartReducer.cart);
  let total=0;
  cart.forEach(item => {
    total+=(item.quantity)*(item.price);
  });

  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
            <h3>shopping Cart</h3>
            <div className='close-btn' onClick={onClose}>
            <AiOutlineClose/> Close
            </div>
        </div>
        <div className="cart-items">
            {
              cart?.map(item=><CartItem key={item.key} cart={item}/>)
            }
        </div>
        
        <div className="checkout-info">
          <div className="total-amount">
            <h3 className='total-msg'>Total:</h3>
            <h3 className='total-val'>₹ {total}</h3>
          </div>
          { cart.length>0 && <div className="checkOut btn-primary">
            CheckOut
          </div>}
        </div>
      
      </div>
    </div>
  )
}

export default Cart