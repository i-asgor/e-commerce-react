import React from 'react';
import Ddata from './Ddata.';
import Slider from "react-slick";


const DiscountCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true
      };
    return (
        <>        
           <div className="content grid product">
            <Slider {...settings}>
            {
                    Ddata.map((value, index) => {
                        return (
                           <>
                             <div className="box product" key={index}>
                                <div className="img">
                                    <img src={value.cover} alt={value.name} width='100%' />
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
        </>
    );
};

export default DiscountCard;