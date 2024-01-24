// src/components/Testimonials

import React from "react";
import { testimonials } from "../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 1500,
        pauseOnHover: true
    };
    return (
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div key={index}>
                    <div className="bg-gray-800 rounded flex p-4 h-full flex-col">
                        <p className="text-gray-300 text-center mb-3 justify-center items-center">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-start text-left mb-3">
                            <img className="w-20 h-20 rounded-full mr-5" src={testimonial.image}></img>
                            <span
                                className="title-font font-medium text-white">{testimonial.name},<br/> {testimonial.company}</span>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}