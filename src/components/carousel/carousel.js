
import {React, useState} from 'react'; 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './carousel.css';

export const Carousel = ({urls}) =>{

    console.log(urls);

    return (            
        <OwlCarousel items={1}  className="owl-carousel owl-theme" loop nav>
                    {
                        urls.map(url =>{
                            return(
                                <div>
                                    <img className="img" src={url}/>
                                </div>
                            )
                        })
                    }
        </OwlCarousel> 
      )  
}  
        
          