import React from 'react'

const ProductCard = (props) => {
            const {image,title,id,brand,category,price}=props
  return (
    <div>
    <div>
    <img style={{width:"200px",height:"200px"}}src={image}></img>
    </div>
    <p>{title,brand}</p>
    <p>{category}</p>
    <p>{price}</p>
    </div>
  )
}

export default ProductCard