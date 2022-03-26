import React from 'react';
import './Cart.css'

const Cart = ({ cart, selectRandomOne, randomOne, clearCart }) => {

    return (
        <div>

            {
                cart.map(product =>
                    <div className="cart-item">
                        <img className='cart-img' src={product.img} alt="" />
                        <p>{product.name}</p>
                    </div>)
            }

            <div >
                {
                    randomOne.map(product =>
                        <div className="cart-item">
                            <img className='cart-img' src={product.img} alt="" />
                            <p>{product.name}</p>
                        </div>)
                }
            </div>

            <button className='btn' onClick={() => selectRandomOne(cart)}>Choose 1 for me</button>
            <button className='btn' onClick={clearCart}>Clear cart</button>
        </div>
    )
};

export default Cart;