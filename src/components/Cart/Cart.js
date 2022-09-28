import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>This is for Cart</h2>
            <p>Cart Items {props.cart.length}</p>
        </div>
    );
};

export default Cart;