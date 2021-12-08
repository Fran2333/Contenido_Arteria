
import React from 'react'; 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './carousel.css';

import imagen1 from './images/blog-page-1.jpg';

export function Carousel ({urls}) {
    return (  
        <div>
            <div class='container-fluid' id="carouselO" >            
                <OwlCarousel items={1}  className="owl-carousel owl-theme" loop nav>  
                    {

                    }
                </OwlCarousel>  
            </div>  
        </div>  
      )  
}  
        
          