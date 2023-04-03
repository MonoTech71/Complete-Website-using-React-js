import React from 'react'
import './Registration.css';

const RegistrationForm = () => {
  return (
   <section className='registration-form'>
    <div className="container">
      <h1 className='form-title'>Registration</h1>
      <form action="#">
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="name">Full Name</label>
            <input type="text" 
                    id='name'
                    name='name'
                    placeholder='Enter Full Name'/>
          </div>

          <div className="user-input-box">
            <label htmlFor="username">Username</label>
            <input type="text" 
                    id='username'
                    name='username'
                    placeholder='Enter Username'/>
          </div>

          <div className="user-input-box">
            <label htmlFor="email">Email</label>
            <input type="text" 
                    id='email'
                    name='email'
                    placeholder='Enter Email Address'/>
          </div>

          <div className="user-input-box">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" 
                    id='phone'
                    name='phone'
                    placeholder='Enter Phone Number'/>
          </div>

          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input type="text" 
                    id='password'
                    name='password'
                    placeholder='Enter Password'/>
          </div>

          <div className="user-input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="text" 
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm Password'/>
          </div>

        </div>
        <div className="gender-details-box">
          <span className='gender-title'>Gender</span>
          <div className="gender-category">
            <input type="radio" name='gender' id='male' />
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' id='female' />
            <label htmlFor="female">Female</label>
            <input type="radio" name='gender' id='other' />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="form-submit-btn">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
    </section>
  )

}

export default RegistrationForm;