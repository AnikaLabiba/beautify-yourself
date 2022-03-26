import React from 'react';
import './Cart.css'

const Cart = ({ cart, selectRandomOne, randomOne, clearCart }) => {



    return (
        <div>
            <div id='card-item'>
                <div id="selected-item">
                    {(cart.map(product => <p>{product.name}</p>))}
                </div>
                <p> {randomOne}</p>
            </div>
            <button onClick={selectRandomOne}>Choose 1 for me</button>
            <button onClick={clearCart}>Clear cart</button>
        </div>
    )
};

export default Cart;