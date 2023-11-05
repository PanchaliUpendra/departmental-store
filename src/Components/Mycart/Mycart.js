import React, { useContext } from 'react';
import './Mycart.css';
import Mycontext from '../../Mycontext';
import emptycart from '../../Assets/emptycart.gif';

function Mycart(){
    const sharedvalue = useContext(Mycontext);
    return(
        <>
            <div className='mycart-con'>
            <div className="about-path">
                    <p>Home / <span>Mycart</span></p>
            </div>
            {sharedvalue.mycart.length===0?
            <div className='wishlist-emptycart-img'>
                <img src={emptycart} alt="emptycart"/>
            </div>
            :
            <div className='mycart-whole-products'>
                <div className='mycart-product-table'>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {
                        sharedvalue.products.filter((item,idx)=>sharedvalue.mycart.includes(item.id)).map((item,idx)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>1</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </table>

                </div>

            </div>
            }
            </div>
        </>
    );
}

export default Mycart;