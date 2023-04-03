import React from 'react'

const Banner = () => {
  return (
    <section className='banner'>
        <div className='banner-details'>
            <h2>BEYOND HAIRCARE -Five Step Ritual</h2><br />
            <p>- We believe the act and art of haircare isn’t something to be rushed or glossed over.</p><br />
            <p>- Rather, it’s an important element within our daily self-care rituals. An opportunity to treat our hair with the care and attention it deserves.</p><br />
            <p>- Explore our five-step ritual and discover the beauty of selfcare in haircare. </p><br /><br />

            <button className='btn'>Five-Step Ritual</button>
        </div>
        <div className='banner-images'>
            <img src="https://cdn.shopify.com/s/files/1/2634/0988/files/HairOil_700w-min_700x_e0db9020-c5ea-4954-a5c5-d942395e8f6b.webp?v=1657054357" alt="" />
        </div>
    </section>
  )
}

export default Banner