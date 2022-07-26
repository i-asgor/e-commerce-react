import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Pages from './Pages/MainPage/Pages';
import Data from './Pages/FlashDeals/Data';
import { useState } from 'react';

function App() {

  const { productItems } = Data

  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Pages productItems={productItems}  />} />
      </Routes>

    </>
  );
}

export default App;
