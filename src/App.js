import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    var [cartQuantity, setCartQuantity] = useState(0);

    const fetchProducts = async () => {
        let response = await fetch('https://cors-anywhere.herokuapp.com/https://web-lai64u320-bird-and-be.vercel.app/api/interview');
        let data = await response.json();
        setProducts(Object.values(data)[0]);
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    
    useEffect(() => {
        total();
    }, [cart]);  

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
          totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
      };
    
    
    const addToCart = (el) => {
        setCart([...cart, el]);
        cartQuantity++;
        setCartQuantity(cartQuantity);
    };
    
    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        cartQuantity--;
        setCartQuantity(cartQuantity);
      };

    const emptyCart = () => {
        let hardCopy = [...cart];
        hardCopy = [];
        setCart(hardCopy);
        cartQuantity = 0;
        setCartQuantity(cartQuantity);
      };  

    return (
        <Router>
        <div>
            <Navbar totalItems={cartQuantity}/>
            <Switch>
                <Route exact path="/">
                    <Products products={products} onAddtoCart={addToCart} />  
                </Route>
                <Route exact path="/cart">
                    <Cart cart={cart} total={cartTotal} onRemoveFromCart={removeFromCart} onEmptyCart={emptyCart} />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default App
