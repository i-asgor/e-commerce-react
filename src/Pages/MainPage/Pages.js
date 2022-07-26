import React from 'react';
import FlashDeals from '../FlashDeals/FlashDeals';
import Home from './Home';

const Pages = ({productItems}) => {
    return (
        <>
           <Home />
           <FlashDeals  productItems={productItems} />
        </>
    );
};

export default Pages;