import React, { useEffect, useState } from 'react'
import './Categeries.scss'
import Product from '../../Components/Product/Product'
import {useNavigate,useParams} from 'react-router';
import { axiosClient } from '../../utils/axiosClient';
import { useSelector } from 'react-redux';

function Categeries() {
    const navigate=useNavigate();
    const params=useParams();
    const [catId,setCatId]=useState('');
    const categories=useSelector(state=>state.categoryReducer.categories);
    const [data,setdata]=useState(null);
    

    const sortOptions=[{
      key:'price-desc',
      value:'price low-high',
      sort:'price'
    },
    {
      key:'newest',
      value:'newest',
      sort:'createdAt'
    }
  ]
  const[sortBy,setSortBy]=useState(sortOptions[0].sort);
  

   
  useEffect(()=>{
    setCatId(params.catId);
    async function fetchData(){
      const url=params.catId?`/products?populate=image&filters[category][key][$eq]=${params.catId}&sort=${sortBy}`:
      `/products?populate=image&sort=${sortBy}`;
  
      const response= await axiosClient.get(url);
      //console.log(response.data.data);
      setdata(response.data.data);
    }
    fetchData();
  },[params,sortBy]);
  
  function updateCategory(e){
    navigate(`/category/${e.target.value}`);
  }
  
  function handleSortChange(e){
    const sortKey=e.target.value;

    setSortBy(sortKey);
  }
 
  return (
    <div className='categeries'>
      <div className="container">
      <div className="header">
        <div className="info">
          <h2>Explore our Arts</h2>
          <p>hey u can visit the most aristic arts in our house</p>
        </div>
        <div className="sort-by">
          <div className="sort-by-container">
            <h3 className="sort-by-text">Sort By</h3>
            <select className='select-sort-by' name="sort-by" id="sort-by" onChange={handleSortChange}>
              {
                sortOptions.map(item=><option key={item.key} value={item.sort}>{item.value}</option>)
              }
              
            </select>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="filter-box">
            <div className="category-filter">
                <h3>Category</h3>
                {
                    categories.map(item =>(
                    <div key={item.id} className="filter-radio">
                        <input name='category' value={item.attributes.key} type="radio" id={item.id} onChange={updateCategory} checked={catId===item.attributes.key}/>
                        <label htmlFor={item.id}>{item.attributes.title}</label>
                    </div>
                    ))
                }
            </div>
        </div>
        <div className="products-box">
            {
              data?.map(item=><Product key={item.id} product={item} />)
            }
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Categeries