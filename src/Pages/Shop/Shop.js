import React from 'react';
import ShopCart from './ShopCart';
import ShopCategory from './ShopCategory';

const Shop = ({shopItems, addToCart}) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <ShopCategory />

                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View all</span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content grid2">
                            <ShopCart shopItems={shopItems} addToCart={addToCart}  />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Shop;