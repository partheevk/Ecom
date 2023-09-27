import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
import './Home.scss'
import { axiosClient } from '../../utils/axiosClient'
import { useSelector } from 'react-redux'

function Home() {
  const categeries=useSelector(state=>state.categoryReducer.categories);
  
  const [topPicks,setTopPicks]=useState(null);

  async function fetchData(){
    
    const topPicksResponse=await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image')

     
     setTopPicks(topPicksResponse.data.data);
  }

  useEffect(()=>{
    fetchData();
    
  },[])
  return (
    <div className='Home'>
      <Hero />
      <section className='collection container'>
        <div className="info">       
          <h2 className='heading'>shop By categeries</h2>
          <p className='sub-heading'>
            Shop from the best, our File and Tv posters collections.
          </p>
        </div>
        <div className="content">
           {
            categeries?.map(item => <Category key={item.id}  category={item}/>)
           }
           
        </div>
      </section>
      <section className='collection container'>
        <div className="info">       
          <h2 className='heading'>Our Top Picks</h2>
          <p className='sub-heading'>
            All New Designs, Same old Details
          </p>
        </div>
        <div className="content">
           {
              topPicks?.map(item=> <Product key={item.id} product={item}/>)
           }
        </div>
      </section>
    </div>
  )
}

export default Home