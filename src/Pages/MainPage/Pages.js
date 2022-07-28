import React from 'react';
import Announcements from '../Announcements/Announcements';
import Discount from '../Discount/Discount';
import FlashDeals from '../FlashDeals/FlashDeals';
import NewArrivals from '../NewArrivals/NewArrivals';
import Shop from '../Shop/Shop';
import TopCategory from '../Top/TopCategory';
import Home from './Home';

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
    return (
        <>
           <Home cartItem={cartItem} />
           <FlashDeals  productItems={productItems} addToCart={addToCart} />
           <TopCategory />
           <NewArrivals />
           <Discount />
           <Shop  shopItems={shopItems} addToCart={addToCart}/>
           <Announcements />
        </>
    );
};

export default Pages;