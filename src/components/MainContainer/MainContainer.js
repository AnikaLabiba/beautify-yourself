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
            setRandomOne([])
            setCart(newCart)
        }
        else {
            alert('You can choose only 4 items.')
        }
    }

    // generating random index
    const selectRandomOne = () => {
        const randomArray = []
        const randomIndex = Math.floor(Math.random() * cart.length)
        const randomProduct = cart[randomIndex]
        randomArray.push(...randomArray, randomProduct)
        setCart([])
        setRandomOne(randomArray);
    }
    // clearing cart
    const clearCart = () => {
        setCart([])
        setRandomOne([])
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
                            clearCart={clearCart}
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