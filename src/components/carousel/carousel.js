
import React from 'react'; 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './carousel.css';

import imagen1 from './images/blog-page-1.jpg';
import imagen2 from './images/blog-page-2.jpg';
import imagen3 from './images/blog-page-3.jpg';



export function Owldemo1 () {
    return (  
        <div>
            <div class='container-fluid' id="carouselO" >            
                <OwlCarousel items={1}  className="owl-carousel owl-theme" loop nav>  
                    <div className="item">
                        <img className="img" src={imagen1}/>
                    </div>
                    <div className="item">
                        <img className="img" src={imagen2}/>
                    </div>
                    <div className="item">
                        <img className="img" src={imagen3}/>
                    </div>
                </OwlCarousel>  
            </div>  
        </div>  
      )  
}  
        
          