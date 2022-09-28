import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handeler, product} = props;
    const {img,name,price,ratings,seller} =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={()=>handeler(product)}> <span>Add to Cart</span> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;