import React from 'react';
import '../css/Reserve.css';
import Place1 from '../img/place1.jpg';
import Place2 from '../img/place2.jpg';
import Place3 from '../img/place3.jpg';

function Blog() {
  return (
    <div className='blog component__space' id='Blog'>
      <div className='heading'>
          <h1 className='heading'>Choose Your Place</h1>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col__3'>
              <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={Place1} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='Blog__meta absolute'>
                          <h5 className='project__text'>Bali Indonesia</h5>
                          <h4 className='project__text'>$2499</h4>
                          <a href='#' className='blog project__btn btn'>Read More</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
              <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={Place2} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='Blog__meta absolute'>
                          <h5 className='project__text'>Bora Bora Polinesia</h5>
                          <h4 className='project__text'>$1599</h4>
                          <a href='#' className='blog project__btn btn'>Read More</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
              <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={Place3} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='Blog__meta absolute'>
                          <h5 className='project__text'>Hawaii EE.UU</h5>
                          <h4 className='project__text'>$3499</h4>
                          <a href='#' className='blog project__btn btn'>Read More</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Blog;
