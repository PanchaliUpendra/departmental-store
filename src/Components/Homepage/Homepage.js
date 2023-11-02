import React, { useRef, useState } from 'react';
import './Homepage.css';

import Aboutf1 from '../../Assets/aboutf1.PNG';
import Aboutf2 from '../../Assets/aboutf2.PNG';
import Aboutf3 from '../../Assets/aboutf3.PNG';

import featurei1 from '../../Assets/featurei1.PNG';
import featurei2 from '../../Assets/featurei2.PNG';
import featurei3 from '../../Assets/featurei3.PNG';
import featurei4 from '../../Assets/featurei4.PNG';

import cate1 from '../../Assets/catei1.PNG';
import cate2 from '../../Assets/catei2.PNG';
import cate3 from '../../Assets/catei3.PNG';
import cate4 from '../../Assets/catei4.PNG';
import cate5 from '../../Assets/catei5.PNG';




function Homepage(){
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [refactive,setrefactive]=useState('ref1');

    const handleScrollIntoView = (ref,rstr) => {
        ref.current.scrollIntoView({left:0, behavior: 'smooth' });
        setrefactive(rstr);
       
      };


    return(
        <>
            <div className='homepage-con'>
                <div className='homepage-cur-con'>
                       
                        <div className='homepage-cursole-div hom-cur-d1' ref={ref1} >curcomputer</div>
                        <div className='homepage-cursole-div hom-cur-d2' ref={ref2} >femalecollection</div>
                       <div className='homepage-cursole-div hom-cur-d3' ref={ref3}  >malecollection</div>
                        <div className='homepage-cursole-div hom-cur-d5' ref={ref4} >accessories</div>
                </div>
                <div className='homepage-cur-scon'>
                    <ul> 
                        <li onClick={()=>handleScrollIntoView(ref1,'ref1')} className={refactive==='ref1'?'cur-active':'cur-inactive'}></li>
                        <li onClick={()=>handleScrollIntoView(ref2,'ref2')} className={refactive==='ref2'?'cur-active':'cur-inactive'}></li>
                        <li onClick={()=>handleScrollIntoView(ref3,'ref3')} className={refactive==='ref3'?'cur-active':'cur-inactive'}></li>
                        <li onClick={()=>handleScrollIntoView(ref4,'ref4')} className={refactive==='ref4'?'cur-active':'cur-inactive'}></li>
                    </ul>
                </div>
                {/* Browse By Category */}
                <div className='browse-by-cate'>
                    <hr/>
                    <div className='homepage-feat-head'>
                        <div></div>
                        <h1>categories</h1>
                    </div>
                    <h1 className='browse-by-cate-header'>Browse By Category</h1>
                    <div className='browse-by-cate-div-part'>
                        <div>
                            <img src={cate1} alt="cate1" className='browse-by-cate-img'/>
                            <p>phones</p>
                        </div>
                        <div>
                            <img src={cate2} alt="cate1" className='browse-by-cate-img'/>
                            <p>computers</p>
                        </div>
                        <div>
                            <img src={cate3} alt="cate1" className='browse-by-cate-img'/>
                            <p>smartwatch</p>
                        </div>
                        <div>
                            <img src={cate4} alt="cate1" className='browse-by-cate-img'/>
                            <p>head phones</p>
                        </div>
                        <div>
                            <img src={cate5} alt="cate1" className='browse-by-cate-img'/>
                            <p>gaming</p>
                        </div>
                    </div>
                    <hr/>
                </div>

                {/* enhance music experience */}
                <div className='enhance-music-homepage'>
                    <p>categories</p>
                    <h1>Enhance Your</h1>
                    <h1>music experience</h1>
                </div>

                {/* homepage features */}
                <div className='homepage-feat-con'>
                    <div className='homepage-feat-head'>
                        <div></div>
                        <h1>featured</h1>
                    </div>
                    <h1>New Arrival</h1>
                    <div className='homepage-img-features'>
                        <div className='homepage-img-features-d1'>
                            <img src={featurei1} alt='featured'/>
                        </div>
                        <div className='homepage-img-features-d2'>
                            <div className='homepage-img-features-d3'>
                            <img src={featurei2} alt='featured'/>
                            </div>
                            <div className='homepage-img-features-d4'>
                                <div>
                                <img src={featurei3} alt='featured'/>
                                </div>
                                <div>
                                <img src={featurei4} alt='featured'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* about free delivery */}
                <div className="about-free-delivery">
                    <div>
                        <img src={Aboutf1} alt="aboutf" className="aboutf-img"/>
                        <h3>FREE AND FAST DELIVERY</h3>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                    <div>
                        <img src={Aboutf2} alt="aboutf" className="aboutf-img"/>
                        <h3>24/7 CUSTOMER SERVICE</h3>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                    <div>
                        <img src={Aboutf3} alt="aboutf" className="aboutf-img"/>
                        <h3>MONEY BACK GUARANTEE</h3>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Homepage;