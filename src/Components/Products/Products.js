import React from 'react';
import './Products.css';
import { useContext } from 'react';
import Mycontext from '../../Mycontext';
import stars from '../../Assets/stars.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../Firebase';
import { doc} from 'firebase/firestore';

import { writeBatch} from "firebase/firestore";
function Products(){
    const sharedvalue = useContext(Mycontext);
    const batch = writeBatch(db);
    async function handlewritewishlist(id){
        try{

            if(sharedvalue.wishlist.includes(id)){
                const batchrf = doc(db, "users", sharedvalue.isauthed.uid);
                batch.update(batchrf,{"wishlist":sharedvalue.wishlist.filter(item=>item!==id)});
                await batch.commit();

            }else{
                const sfDocRef = doc(db, "users", sharedvalue.isauthed.uid);
                batch.update(sfDocRef,{"wishlist":[...sharedvalue.wishlist,id]});
                await batch.commit();
            }
        }catch(e){
            console.error('you got an error while updating the wishlist',e);
        }
    }
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
                            <div className='product-add-wishlist' onClick={()=>handlewritewishlist(item.id)}>
                            {sharedvalue.wishlist.includes(item.id)?<FavoriteIcon sx={{ color: 'red' }}/>:<FavoriteBorderIcon/>}
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