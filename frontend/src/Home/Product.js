import React from 'react'
import {Link, } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';



const Product = ({product}) => {
    const options ={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"#ffa500",
        value:product.rating,
        isHalf:true, // if property to show star too 
        size:window.innerWidth <600 ?20 : 25,
    }

    let links;
     if(!product.isMachine){
          links=`/product/${product._id}`
    }else{
        links=`/machine/${product._id}`
    }





    return (
      <Link className='productCard' to={links} >
      <img src={product.images[0].url?product.images[0].url:product.images} alt={product.name} />
      <p>{product.name}</p>
      <div>
          <ReactStars {...options}/> <span> ({product.numOfReviews} reviews)</span>
      </div>
     <span> {` ₹${product.price} MRP`}</span>

      </Link>
    )
}

export default Product
