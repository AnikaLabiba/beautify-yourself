import React from 'react';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
const Product = (props) => {
    const { img, name, price } = props.product
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button className='cart-btn'>Add to Cart <BsFillCartPlusFill></BsFillCartPlusFill></button>
        </div>
    );
};

export default Product;