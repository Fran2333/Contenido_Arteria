
import {React, useState} from 'react'; 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './carousel.css';

export function Carousel ({urls}) {

    console.log(urls);

    return (  
        <div>
            <div class='container-fluid-c' id="carouselO" >            
                <OwlCarousel items={1}  className="owl-carousel owl-theme" loop nav>
                    {
                        urls.map(url =>{
                            return(
                                <div className="item">
                                    <img  className="img" src={url}/>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>  
            </div>  
        </div>  
      )  
}  
        
          