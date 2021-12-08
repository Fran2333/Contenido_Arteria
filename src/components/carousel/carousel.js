import React from 'react';
import Carousel from 'nuka-carousel';
import './carousel.css';

import imgDefault from './images/blog-page-1.jpg';

export const NukaCarousel = ({urls}) =>{
    return (
        <Carousel>
          {
              urls.length >= 1 ? (
                urls.map(url =>{

                    const divStyle = {
                        margin: 'auto',
                        width: '500px',
                        height: '300px',
                        backgroundImage: 'url(' + url + ')',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat:'no-repeat'
                      };
    
                      return(
                          <div style={divStyle}></div>
                      )
                  })
              ): (
                <div style={
                    {
                        margin: 'auto',
                        width: '500px',
                        height: '300px',
                        backgroundImage: 'url('+imgDefault+')',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat:'no-repeat'
                    }
                }></div>
              )
          }
        </Carousel>
    );
}