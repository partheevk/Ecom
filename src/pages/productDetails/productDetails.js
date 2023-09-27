import React, { useEffect, useState } from 'react'

import './productDetails.scss'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { addtCoCart, removeFromCart } from '../../redux/cartSlice';

function ProductDetails() {
  const params=useParams();
  const [product,setproduct]=useState(null);
  const dispatch=useDispatch();

  const cart=useSelector(state=>state.cartReducer.cart);
  const quantity=cart.find(item=>item.key===params.productId)?.quantity||0;

 

  useEffect(()=>{
    setproduct(null);
    async function fetchData(){
      const productResponse=await axiosClient.get(`/products/?filters[key][$eq]=${params.productId}&populate=*`);
      
      if(productResponse.data.data.length>0){
        setproduct(productResponse.data.data[0]);
        
      }
      
    }
    fetchData();
  },[params])

  if(!product){
    return <div  className="loading">Loading...</div>
  }

  return (
    <div className='productDetails'>
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={product?.attributes.image.data.attributes.url} alt={product.attributes.title} />
          </div>
          <div className="product-info">
            <h1 className='heading'>
              {product.attributes.title}
            </h1>
            <h3 className="price"> ₹ {product.attributes.price} </h3>
            <p className='description'>
            {
              product.attributes.description
            }
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className='btn decrement' onClick={()=>dispatch(removeFromCart(product))}>-</span>
                <span className='quantity'>{quantity}</span>
                <span className='btn increment' onClick={()=>dispatch(addtCoCart(product))}>+</span>
              </div>
              {/* <button className="btn-primary add-to-cart">Add to Cart</button> */}
            </div>
            <div className="return-policy">
              <ul>
                <li>Returns and refunds are a part of doing business online.</li>
                <li>Customers might be unsatisfied with their order for a number of reasons—it arrived damaged, they ordered the wrong size, or it simply didn’t meet their expectations. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails