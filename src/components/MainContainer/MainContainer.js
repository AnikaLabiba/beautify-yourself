import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './MainContainer.css'

const MainContainer = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [randomOne, setRandomOne] = useState([])

    // loading data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // handling add to cart
    const haldleAddToCart = (product) => {
        if (cart.length <= 3) {
            const newCart = [...cart, product]
            setCart(newCart)
        }
        else {
            alert('You can choose only 4 items.')
        }
    }

    // generating random index
    const selectRandomOne = () => {
        document.getElementById('selected-item').textContent = ''
        const randomIndex = Math.floor(Math.random() * cart.length)
        const randomName = cart[randomIndex].name
        setRandomOne(randomName);
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
            <div>
                <div className="cart-container">
                    <h3>Selecte Items:</h3>
                    <div>
                        <Cart cart={cart}
                            selectRandomOne={selectRandomOne}
                            randomOne={randomOne}
                            setCart={setCart}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;