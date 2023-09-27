import React from 'react'
import { addtCoCart, removeAll, removeFromCart } from '../../redux/cartSlice';
import {AiOutlineClose} from 'react-icons/ai'
import './CartItem.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function CartItem({cart}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <div className='cartItem'>
      <div className="item-img" onClick={()=>navigate(`/products/${cart.key}`)}>
        <img src={cart.image} alt="" />
      </div>
      <div className="item-info-wrapper">
      <div className="item-info">
        <p className="title">{cart.title}</p>
        <p className='price'>₹ {cart.price}</p>
        <div className="quantity-selector">
                <span className='btn decrement' onClick={()=>dispatch(removeFromCart(cart))}>-</span>
                <span className='quantity'>{cart.quantity}</span>
                <span className='btn increment' onClick={()=>dispatch(addtCoCart(cart))}>+</span>
        </div>
        <p className="total-price">SUb-total: ₹ {(cart.quantity)*(cart.price)}</p>
      </div>
      <div className="item-remove" onClick={()=>dispatch(removeAll(cart))}>
        <AiOutlineClose /> 
      </div>
      </div>
      
    </div>
  )
}

export default CartItem
