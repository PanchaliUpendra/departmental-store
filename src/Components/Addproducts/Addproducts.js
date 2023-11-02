import React from 'react';
import './Addproducts.css';

function Addproducts(){
    return(
        <>
        <div className='addproduct-con'>
            <div className="about-path">
                <p>Home / <span>Add Products</span></p>
            </div>
            <div className='addproducts-cards'>
                <div className='addproduct-header'>
                    <h1>add your products here</h1>
                </div>
                <div className='addproduct-con-inner'>
                    <div>
                        <label>name</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>price</label>
                        <input type='number'/>
                    </div>
                    <div>
                        <label>stars</label>
                        <input type='number'/>
                    </div>
                    <div>
                        <label>size</label>
                        <select>
                            <option value=''>Select Size</option>
                            <option value="all">All</option>
                            <option value="xl">XL</option>
                            <option value="l">L</option>
                            <option value="m">M</option>
                            <option value="s">S</option>
                        </select>
                    </div>
                    <div>
                        <label>Category</label>
                        <select>
                            <option value=''>Select Category</option>
                            <option value='femalecollection'>Female Collection</option>
                            <option value='malecollection'>Male Collection</option>
                            <option value='electronics'>Electronics</option>
                            <option value='mobiles'>Mobiles</option>
                            <option value='computer'>computer $ laptops</option>
                            <option value='kidsware'>Kids ware</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose Image</label>
                        <input type='file'/>
                    </div>
                </div>
                <div className='addproducts-textarea'>
                    <textarea placeholder='enter the description of an item ...'/>
                </div>
                
            </div>
        </div>
        
        </>
    );
}

export default Addproducts;