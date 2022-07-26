import React from 'react';
import FlashDeals from '../FlashDeals/FlashDeals';
import Home from './Home';

const Pages = ({productItems, cartItem, addToCart}) => {
    return (
        <>
           <Home cartItem={cartItem} />
           <FlashDeals  productItems={productItems} addToCart={addToCart} />
        </>
    );
};

export default Pages;