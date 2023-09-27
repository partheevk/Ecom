import React from 'react'
import './Category.scss'
import { useNavigate } from 'react-router-dom'

function Category({category}) {
  // console.log(category);
  const naviagte=useNavigate();
  return (
    <div className='category' 
    style={{backgroundImage: `url(${category.attributes.image.data.attributes.url})`}}
    onClick={()=>naviagte(`/category/${category.attributes.key}`)}>
      <div className="cat-content center">
        <h3 className='heading'>
          {category?.attributes?.title}
        </h3>
      </div>
    </div>
  )
}

export default Category