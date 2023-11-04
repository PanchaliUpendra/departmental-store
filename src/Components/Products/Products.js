import React from 'react';
import './Products.css';
import { useContext } from 'react';
import Mycontext from '../../Mycontext';
import stars from '../../Assets/stars.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Products(){
    const sharedvalue = useContext(Mycontext);
    return(
        <>
            <div className='products-con'>
                <div className="about-path">
                    <p>Home / <span>products</span></p>
                </div>
                <div className='products-items-all-cards'>
                    {sharedvalue.products.filter((item,idx)=> item).map((item,idx)=>(
                        <div className='flash-items-each-card' key={idx}>
                            <div className='flash-item-images'>
                            <div className='product-add-wishlist'>
                                <FavoriteBorderIcon/>
                            </div>
                            <img src={item.imgurl} alt='products'/>
                            <div className='product-add-to-cart-btn'>
                                <h1>
                                    Add To Cart
                                </h1>
                            </div>
                            </div>
                            <div>
                            <h1>{item.name}</h1>
                            <p>₹{item.price}</p>
                            <h3>{item.stars}<img src={stars} alt='stfarts' className='stars-icon-img'/></h3>
                            </div>
                        </div>
                    ))}
                    </div>

            </div>
        </>
    );
}

export default Products;