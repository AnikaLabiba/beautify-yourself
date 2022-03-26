import React from 'react';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
const Product = (props) => {
    const { haldleAddToCart, product } = props
    const { img, name, price } = product
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => haldleAddToCart(product)} className='cart-btn'>Add to Cart <BsFillCartPlusFill></BsFillCartPlusFill></button>
        </div>
    );
};

export default Product;