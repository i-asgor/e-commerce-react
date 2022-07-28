import React from 'react';
import Ndata from './Ndata';
import Slider from "react-slick";
import './NewArrivals.css'

const NewCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <div className='content grid product'>
            <Slider {...settings}>
            {
                Ndata.map((value, index) => {
                    return (
                        <>
                            <div className="box product" key={index}>
                                <div className="img">
                                    <img src={value.cover} alt={value.name} width='100%'/>
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        </>
                    )
                })
            }
            </Slider>
        </div>
    );
};

export default NewCart;