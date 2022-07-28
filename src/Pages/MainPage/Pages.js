import React from 'react';
import Discount from '../Discount/Discount';
import FlashDeals from '../FlashDeals/FlashDeals';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopCategory from '../Top/TopCategory';
import Home from './Home';

const Pages = ({productItems, cartItem, addToCart}) => {
    return (
        <>
           <Home cartItem={cartItem} />
           <FlashDeals  productItems={productItems} addToCart={addToCart} />
           <TopCategory />
           <NewArrivals />
           <Discount />
        </>
    );
};

export default Pages;