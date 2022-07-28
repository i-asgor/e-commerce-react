import React from 'react';
import DiscountCard from './DiscountCard';

const Discount = () => {
    return (
        <>
            <section className='background newarrivals'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/windows/32/fa324a/gift.png' alt='New Arrivals' />
                            <h2>Big Discounts</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <DiscountCard />
                </div>
            </section>
        </>
    );
};

export default Discount;