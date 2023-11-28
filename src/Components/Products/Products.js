import React, { useEffect, useState } from 'react';
import './Products.css';
import { useContext } from 'react';
import Mycontext from '../../Mycontext';
import stars from '../../Assets/stars.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../Firebase';
import { doc} from 'firebase/firestore';

import { writeBatch} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import search from '../../Assets/search.png';

function Products(){
    const navigate = useNavigate();
    const [searchitem,setsearchitem] = useState('');
    const [minprice,setminprice] = useState('');
    const [maxprice,setmaxprice] = useState('');
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

    const [filterpro,setfilterpro] = useState('');
    const [sortpro,setsortpro] = useState('');

    async function handlewritemycart(item){
        try{

            if(sharedvalue.mycart.includes({
                ...item,qty:1
            })){
                console.log('you already added to the cart bangaram')

            }else{
                const sfDocRef = doc(db, "users", sharedvalue.isauthed.uid);
                batch.update(sfDocRef,{"mycart":[...sharedvalue.mycart,{
                    ...item,
                    qty:1
                }]});
                await batch.commit();
            }
        }catch(e){
            console.error('you got an error while updating the wishlist',e);
        }
    }
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[])
    return(
        <>
            <div className='products-con'>
                <div className="about-path">
                    <p>Home / <span>products</span></p>
                </div>
                <div className='products-select-options'>
                    <div className='products-select-options-div1'> 
                        <img src={search} alt="search"/>
                        <input type='text' placeholder='Search Item' onChange={(e)=>setsearchitem(e.target.value)}/>
                    </div>
                    <div className='product-select-parts'>
                        <select value={filterpro} onChange={(e)=>setfilterpro(e.target.value)}>
                            <option value=''>Filter</option>
                            <option value='femalecollection'>Female Collection</option>
                            <option value='malecollection'>Male Collection</option>
                            <option value='electronics'>Electronics</option>
                            <option value='mobiles'>Mobiles</option>
                            <option value='computer'>computer & laptops</option>
                            <option value='kidsware'>Kids wear</option>
                            <option value="other">Other</option>
                        </select>
                        <select value={sortpro} onChange={(e)=>setsortpro(e.target.value)}>
                            <option value=''>Sort</option>
                            <option value='increasing'>Low To High</option>
                            <option value='decreasing'>High To Low</option>
                        </select>
                    </div>
                </div>
                <div className='price-range-con'>
                    <div className='price-range-min-max'>
                        <div>
                        <h1>price range</h1>
                        <div>
                            <input type='number' placeholder='min price' onChange={(e)=>setminprice(e.target.value)} value={minprice}/>
                            -
                            <input type='number' placeholder='max price' onChange={(e)=>setmaxprice(e.target.value)} value={maxprice}/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className='products-items-all-cards'>
                    {sharedvalue.products.filter((finf)=>finf.name.includes(searchitem)).filter((pifp)=>(Number(minprice)!==0  && Number(maxprice)!==0)?pifp.price>=Number(minprice) && pifp.price<=Number(maxprice):true).filter((item,idx)=>filterpro===''?true:item.category===filterpro).slice().sort((a,b)=>sortpro===''?true:sortpro==='increasing'?a.price-b.price:b.price-a.price).map((item,idx)=>(
                        <div className='flash-items-each-card' key={idx} >
                            <div className='flash-item-images'>
                            <div className='product-add-wishlist' onClick={()=>handlewritewishlist(item.id)}>
                            {sharedvalue.wishlist.includes(item.id)?<FavoriteIcon sx={{ color: 'red' }}/>:<FavoriteBorderIcon/>}
                            </div>
                            <img src={item.imgurl} alt='products' onClick={()=>navigate(`/products/${item.id}`)}/>
                            <div className='product-add-to-cart-btn' onClick={()=>handlewritemycart(item)}>
                                <h1>
                                    Add To Cart
                                </h1>
                            </div>
                            </div>
                            <div>
                            <h1>{item.name}</h1>
                            <p>${item.price}</p>
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