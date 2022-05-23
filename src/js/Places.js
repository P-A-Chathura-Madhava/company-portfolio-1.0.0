import React from 'react';
import '../css/Places.css';
import place1 from '../img/place1.jpg';
import place2 from '../img/place2.jpg';
import place3 from '../img/place3.jpg';
import place4 from '../img/place4.jpg';
import place5 from '../img/place5.jpg';

function Project() {
  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
          <h1 className='heading'>Discover the most attractive places</h1>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col__3'>
                  <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={place1} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='project__meta absolute'>
                          <a href='#' className='project__btn'>View Details</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
                  <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={place2} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='project__meta absolute'>
                          <a href='#' className='project__btn'>View Details</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
                  <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={place3} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='project__meta absolute'>
                          <a href='#' className='project__btn'>View Details</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
                  <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={place4} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='project__meta absolute'>
                          <a href='#' className='project__btn'>View Details</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
                  <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={place5} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='project__meta absolute'>
                          <a href='#' className='project__btn'>View Details</a>
                      </div>
                  </div>
              </div>
              <div className='col__3'>
                  <div className='project__box pointer relative'>
                      <div className='project__box__img pointer relative'>
                          <div className='project__img__box'>
                              <img src={place2} alt='' className='project__img'/>
                          </div>
                          <div className='mask__effect'></div>
                      </div>
                      <div className='project__meta absolute'>
                          <a href='#' className='project__btn'>View Details</a>
                      </div>
                  </div>
              </div>
              <div className='view__more__btn d__flex align__items__center justify__content__center pxy__30'>
                  <button className='view__more pointer btn'>View More</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Project
