// src/components/Testimonials
import React from "react";
import { testimonials } from "../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import {ChatIcon} from "@heroicons/react/solid";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <ChatIcon className="mx-auto inline-block w-10 mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    My Happy Contractual Employers
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    With an honest feedback to my work.
                </p>
            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="bg-gray-800 rounded-xl flex p-4 h-full flex-col">
                            <p className="text-gray-300 text-center mb-3 justify-center items-center">"{testimonial.quote}"</p>
                            <div className="flex items-center justify-start text-left mb-3">
                                <img className="w-20 h-20 rounded-full mr-5" src={testimonial.image} alt="testimonial"></img>
                                <span
                                    className="title-font font-medium text-white">{testimonial.name},<br/> {testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}