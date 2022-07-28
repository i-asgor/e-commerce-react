import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Pages from './Pages/MainPage/Pages';
import Data from './Pages/FlashDeals/Data';
import { useState } from 'react';
import Cart from './Pages/Cart/Cart';
import ShopData from './Pages/Shop/ShopData';

function App() {

  const { productItems } = Data;

  const { shopItems } = ShopData;

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id )

    if(productExist){
      setCartItem(cartItem.map((item)=>(item.id === product.id ? {...productExist, qty: productExist.qty + 1}: item )))
    }else{
      setCartItem([...cartItem, { ...product, qty: 1}])
    }
  }
  const decreaseQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id )

    if(productExist.qty === 1){
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item)=>(item.id === product.id ? {...productExist, qty: productExist.qty - 1}: item )))
    }
  }

  return (
    <>
      <Header cartItem={cartItem}/>
      <Routes>
        <Route exact path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        <Route exact path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart}  decreaseQty={decreaseQty} />} />
      </Routes>

    </>
  );
}

export default App;
