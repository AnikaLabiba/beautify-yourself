import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // let newCart=[]
    // const { product } = cart


    return (
        <div>
            <h3>Selecte Items:</h3>
            {
                cart.map(product => <p>{product.name}</p>)
            }


        </div>
    )
};

export default Cart;