import React from 'react'
import './Main.css';

import { FaStar } from "@react-icons/all-files/fa/FaStar";

const Single = () => {
  return (
    <section className='single'>
        <div className='imagess'>
            <div className='big-image'>
              <img className='big' src="https://cdn.shopify.com/s/files/1/2634/0988/products/Conditioner_Ecomm_2.jpg?v=1637560803&width=713" alt="" />
            </div>
            <div className='small_images'>
              <img src="https://cdn.shopify.com/s/files/1/2634/0988/products/Conditioner_Ecomm_1.jpg?v=1658178228&width=713" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/2634/0988/products/Conditioner_Ecomm_1.jpg?v=1658178228&width=713" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/2634/0988/products/1-min_f8b3ee1d-a871-4e80-b702-26c0b07bf834.png?v=1658201018&width=713" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/2634/0988/products/2-min_b2839215-11fe-4133-9363-6a9665e6aa91.png?v=1658201018&width=713" alt="" />
            </div>
        </div>

        <div className='single-page-details'>
          <h2>Nourishing Conditioner</h2><br />
          <p>Creamy formula, fights frizz & breakage</p><br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quibusdam dicta vitae reprehenderit excepturi, sapiente a tempora alias explicabo ipsam aut nostrum, delectus nihil enim quis voluptates. Sint, excepturi voluptas</p>
          <p className='price'> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> 86 reviews</p><br />
          <p className='price'>$22.50 USD</p><br />
          <select name="" id="select">
            <option value="select">Select</option>
            <option value="xl">XL</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select><br /><br /><br /><br /><br />

          <button className='P_Button'>Add to cart</button>
        </div>
    </section>
  )
}

export default Single;