import React from 'react';
import './Cart.css'

const Cart = ({ cart, selectRandomOne, randomOne, clearCart }) => {

    return (
        <div>

            {(cart.map(product => <p>{product.name}</p>))}
            <p> {randomOne}</p>

            <button className='btn' onClick={selectRandomOne}>Choose 1 for me</button>
            <button className='btn' onClick={clearCart}>Clear cart</button>
        </div>
    )
};

export default Cart;