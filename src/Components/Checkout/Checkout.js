import React, { useContext, useState } from 'react';
import './Checkout.css';
import emptycart from '../../Assets/emptycart.gif';
import Mycontext from '../../Mycontext';



function Checkout(){
    const sharedvalue = useContext(Mycontext);
    const [totalprice,settotalprice] = useState(0);

    function handletotalprice(product){
        settotalprice(prev=>prev+(Number(product.price)*Number(product.qty)));
    }

    return(
        <>
            <div className='checkout-con'>
                <div className="about-path">
                    <p>Home / Products / view Cart / <span>CheckOut</span></p>
                </div>
                {sharedvalue.mycart.length===0?
                <div className='wishlist-emptycart-img'>
                    <img src={emptycart} alt="emptycart"/>
                </div>
                :
                <div className='checkout-inner-con'>
                    <div className='checkout-address-form'>
                        <h1>Billing Details</h1>
                        <div className='checkout-address-form-first-div'>
                            <div>
                                <label>First Name*</label>
                                <input type='text'/>
                            </div>
                            <div>
                                 <label>Street Address*</label>
                                <input type='text'/>
                            </div>
                            <div>
                                <label>Apartment, floor, etc. (optional)</label>
                                <input type='text'/>
                            </div>
                            <div>
                                <label>Town/City*</label>
                                <input type='text'/>
                            </div>
                            <div>
                                <label>Phone Number*</label>
                                <input type='number'/>
                            </div>
                            <div>
                                <label>Email Address*</label>
                                <input type='email'/>
                            </div>
                        </div>
                    </div>
                    <div className='checkout-bill-con'>
                        {sharedvalue.mycart.map((item,idx)=>(
                            <div className='checkout-bill-con-each-one' onLoad={()=>handletotalprice(item)}>
                                <div>
                                <img src={item.imgurl} alt='pics'/>
                                <p>{item.qty}×{item.name}</p>
                                </div>
                                <p>₹{Number(item.price)*Number(item.qty)}</p>
                            </div>
                        ))}
                        <div className='checkout-bill-con-each-two'>
                            <p>subtotal:</p>
                            <p>₹{totalprice}</p>
                        </div>
                        <hr/>
                        <div className='checkout-bill-con-each-two'>
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='checkout-bill-con-each-two'>
                            <p>Total:</p>
                            <p>₹{totalprice}</p>
                        </div>
                    </div>

                </div>
                }
                
            </div>
        </>
    );
}

export default Checkout;