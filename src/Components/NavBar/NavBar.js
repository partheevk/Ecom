import React,{useState} from 'react'
import './NavBar.scss'
import {Link} from 'react-router-dom'
import {BsCart} from 'react-icons/bs'
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux'


function NavBar() {
  const [openCart,setOpenCart]=useState(false);
  const cart=useSelector(state=>state.cartReducer.cart);

  const categories=useSelector(state=>state.categoryReducer.categories);

  let total=0;
  cart.forEach(element => {
    total+=element.quantity;
  });
  

  return (
    <div className='Navbar'>
      <div className="container nav-container">
        <div className="nav-left">
          <ul className='link-group'>
            {
              categories?.map(category=><li key={category.id} className='hover-link'>
              <Link className='link' to={`category/${category.attributes.key}`}>{category.attributes.title}</Link>
              </li>)
            }
           
          </ul>
        </div>
        <div className="nav-center">
        <Link to="/">
          <h1 className='banner'>PosterZ</h1>
        </Link>
        </div>
        <div className="nav-right">
          <div className="nav-cart hover-link" onClick={()=>setOpenCart(!openCart)}>
            <BsCart className="icon" />
            <span className='cart-count center'>{total}</span>
          </div>
        </div>
      </div>
      {openCart && <Cart onClose={()=>setOpenCart(false)} />}
    </div>
  )
}

export default NavBar