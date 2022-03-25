import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './MainContainer.css'

const MainContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>

            <div className="product-container">
                <h2>Choose 4 products</h2>
                <div className="products">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default MainContainer;