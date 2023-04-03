import React from 'react'
import './Contact.css';

const Info = () => {
  return (
    <section className='contact-container'>

    <div className='left-info'>
      <h2>Ask how we can help you:</h2><br /><br />
      <h4>See our platform in action</h4>
      <p>Request a personalized demo of MonoTech’s partner marketing platform.</p><br />

      <h4>Master performance marketing</h4>
      <p>From MonoTech Academy courses to industry research and insights, learn how to grow your business through performance-based partnerships.</p><br />

      <h4>Explore life at MonoTech</h4>
      <p>Search open positions, read about company culture and values, and explore our charitable initiatives.</p><br /><br /><br />

      <span>Points of Contact</span>
      <h4>B.D | MonoTech</h4>
      <p>Dhaka, Bangladesh</p>

      <h4>Information and Sales</h4>
      <p>talentdev285@gmail.com</p>
    </div>
   
   
   
    <div className='right-info'>
      <h2>Please note: all fields are required.</h2>
      <br />
      <div className="contact-input-box">
          <label htmlFor="name">First Name</label>
          <br />
          <input type="text" 
                  id='first-name'
                  name='first-name'
                  placeholder='Enter First Name'/>
        </div>
        <br />
        <div className="contact-input-box">
          <label htmlFor="name">Last Name</label>
          <br />
          <input type="text" 
                  id='last-name'
                  name='last-name'
                  placeholder='Enter Last Name'/>
        </div>
        <br />
        <div className="contact-input-box">
          <label htmlFor="name">Company Name</label>
          <br />
          <input type="text" 
                  id='company-name'
                  name='company-name'
                  placeholder='Company Name'/>
        </div>
        <br />
        <div className="contact-input-box">
          <label htmlFor="name">Job Title:</label>
          <br />
          <input type="text" 
                  id='job-title'
                  name='job-title'
                  placeholder='Enter Job Title'/>
        </div>
        <br />
        <div className="contact-input-box">
                <label htmlFor="country">Country</label>
                <br />
              <select name="country" required>
                <option value="" disabled selected hidden>Select</option>
                <option value="select">Select:</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="united-states">United States</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="netherland">Netherland</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
            </select>
        </div>
        <br />
        <div className="contact-input-box">
                <label htmlFor="btype">Business Type:</label>
                <br />
              <select name="btype" required>
                <option value="" disabled selected hidden>Select</option>
                <option value="select">Select:</option>
                <option value="advertiser">Advertiser</option>
                <option value="agency">Agency</option>
                <option value="network">Network</option>
                <option value="partner">Partner/Affiliate/Publisher</option>
                <option value="other">Other</option>
            </select>
        </div>
        <br />
        <div className="contact-input-box">
          <label htmlFor="name">Comments</label>
          <br />
          <input type="text" 
                  id='comments'
                  name='comments'
                  placeholder='Leave Comments'/>
        </div>

        <div className="contact-input-checkbox">
          <input type="checkbox" name="" id="" />
          <span>I'd like to receive more information about MonoTech; I understand and agree to the privacy policy.</span>
        </div>

          <div className="contact-submit-btn">
            <input type="submit" value="Send Message" />
          </div>
    </div>
  </section>

  )
}

export default Info