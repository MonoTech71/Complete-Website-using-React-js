import React, { useState} from 'react'
import { Link } from "react-router-dom";
import Single from './Single-P_Details';

import './Main.css';
import Products_Data from './Products_Data';
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaStarHalfAlt } from "@react-icons/all-files/fa/FaStarHalfAlt";

const Products_Details = () => {

    
    const [Data, setData] = useState(Products_Data)


  return (
    <>
    <section className='P_Main'>
        {Data.map((item) => {
            return(
                <div className='products'>
                        <div className='images'>
                            <img src={item.img} />
                            <button className='sale'>sale</button>
                        </div>

                        <div className='details'>
                            <h4>{item.title}  </h4><br />
                            <p className='icons'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p><br />
                            <p>{item.reviews}</p><br />
                            <p>{item.price}</p><br />
                            
                            <Link to='./single'><button onClick={Single} className='P_Button'>Add to cart</button></Link>
                        </div>
                </div>
            )
        })}


    </section>

    </>
  )
}

export default Products_Details;