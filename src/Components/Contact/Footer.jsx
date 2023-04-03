import React, {useState} from 'react'
import './Contact.css';
import {FaFacebook, FaTwitter, FaWhatsapp, FaLinkedinIn, FaPhone} from 'react-icons/fa'
import social from './social';

const Footer = () => {
  function ldClick() {
    window.open('https:www.linkedin.com')
  }
  function fbClick() {
    window.open('https:www.facebook.com')
  }

  function tClick() {
    window.open('https:www.twitter.com')
  }

  function wClick() {
    window.open('https:www.whatsapp.com')
  }

  return (
        <section className='footer'>
                <div className="container-footer">
                <div className='logo'>
                <label className='logo'>Mono<span>Tech</span></label>
                <p>Contact with me for design websites. Welknown skills are: HTML, CSS, JavaScript, React.js, WordPress, Bootstrap etc.</p>

                </div>
                <div className="contact">
                <label className='logo'>Contact</label>
                    <p>Email: talentdev285@gmail.com</p>
                    <p>Phone: +880-1731688619</p>
                </div>
                <div className='social-links'>
                <label className='logo'>Social Media</label>
                <div className="icons">
                    < FaLinkedinIn onClick={ldClick}/>
                    < FaFacebook onClick={fbClick}/>
                    <FaTwitter onClick={tClick}/>
                    <FaWhatsapp onClick={wClick}/>
                    <FaPhone/>
                </div>
                </div>

            </div>

            <div className="copy-right"><h3>Copyright MonoTech 2018 - 2023</h3></div>
    </section>


  )
}

export default Footer