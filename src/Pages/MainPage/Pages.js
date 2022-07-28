import React from 'react';
import FlashDeals from '../FlashDeals/FlashDeals';
import TopCategory from '../Top/TopCategory';
import Home from './Home';

const Pages = ({productItems, cartItem, addToCart}) => {
    return (
        <>
           <Home cartItem={cartItem} />
           <FlashDeals  productItems={productItems} addToCart={addToCart} />
           <TopCategory />
        </>
    );
};

export default Pages;