import React, { useState, useEffect } from 'react'
//import Axios from 'axios';
import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let response = await fetch('https://cors-anywhere.herokuapp.com/https://web-lai64u320-bird-and-be.vercel.app/api/interview');
        let data = await response.json();
        setProducts(Object.values(data)[0]);
    }

    useEffect(() => {
         fetchProducts();
    },[]);

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
