import React from 'react';
import '../css/Subscribe.css';
import contactImg from '../img/bg.jpg';

function Contact() {
  return (
    <div className='contact component__space' id='Contact'>
      <div className='row'>
          <div className='col__2'>
              <div className='contact__box'>
                  <div className='contact__meta'>
                      <h1 className='hire__text'>Subscribe Our Newsletter</h1>
                      <p className='hire__text white'>Subscribe to our newsletter and get a special 30% discount. </p>
                  </div>
                  <div className='input__box'>
                      <input type='text' className='contact email' placeholder='Your email *'/>
                      <button className='btn contact pointer' type='submit'>Submit</button>
                  </div>
              </div>
          </div>
          <div className='col__2'>
              <img src={contactImg} alt='' className='contact__img'/>
          </div>
      </div>
    </div>
  )
}

export default Contact;
