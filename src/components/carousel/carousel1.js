import React, { Component } from "react";
import Slider from "react-slick";

export const SimpleSlider = (props) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                {
                    props.urls.map(url =>{
                        return(
                            <div>
                                <img  className="img" src={url}/>
                            </div>
                            )
                    })
                }
            </Slider>
        </>
    );
}