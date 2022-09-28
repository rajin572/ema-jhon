import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const productPrice of cart){
        total = total + productPrice.price;
        shipping = shipping + productPrice.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grand = total + shipping + parseFloat(tax);

    return (
        <div className='cart'>
            <h2>This is for Cart</h2>
            <p>Cart Items {cart.length}</p>
            <p>Total Price {total}</p>
            <p>Total Shipping {shipping}</p>
            <p>Total Tax {tax}</p>
            <p>Grand Total {grand}</p>
        </div>
    );
};

export default Cart;