import React from 'react';

const Cart = ({cartItem, addToCart,decreaseQty}) => {
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
                    </div>

                    {
                        cartItem.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt={item.name} />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price}.00 * {item.qty}
                                            <span>${productQty}.00</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button className="removeCart">
                                                <i className="fa fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <div className="cartControl d_flex">
                                            <button className="incCart" onClick={()=> addToCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className="incCart" onClick={()=> decreaseQty(item)}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;