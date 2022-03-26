import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './MainContainer.css'

const MainContainer = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const haldleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        //console.log(newCart)
    }
    return (
        <div className='container'>

            <div className="product-container">
                <h2>Choose 4 products</h2>
                <div className="products">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            haldleAddToCart={haldleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MainContainer;