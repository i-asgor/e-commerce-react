import React from 'react';
import Slider from "react-slick";


const FlashCard = ({productItems}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <>
         <Slider {...settings}>
            {productItems.map((productItems) =>{
                return (
                    <div className="box">
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">{productItems.discount}% Off</span>
                                <img src={productItems.cover} alt={productItems.name} />
                            </div>
                            <div className="product-like">
                                <label>0</label> <br />
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{productItems.name}</h3>
                            <div className="rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="price">
                                <h4>{productItems.price}.00</h4>
                                <button>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                })}
                </Slider>
        </>
    );
};

export default FlashCard;