import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

    console.log(product);
    return (
        <div className="product-card">
            <img src={product.image} />
            <h2> {product.name}</h2>
            <p>{product.discription}</p>
            <p>{product.price}</p>


        </div>





    )
}












export default ProductCard;