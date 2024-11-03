// src/components/Feedbacks.js
import React from "react";
import { feedbacks } from "../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import {BriefcaseIcon, UserCircleIcon} from "@heroicons/react/solid";

export default function Feedbacks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        autoplay:true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };
    return (
        <section id="feedbacks">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Feedbacks
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        My clients are happy with my work. Here are some of their feedbacks.
                    </p>
                </div>
                <Slider {...settings}>
                    {feedbacks.map((feedback, index) => (
                        <div key={index}>
                            <div className="flex p-4 h-full flex-col">
                                <p className="text-gray-300 text-center mb-3 justify-center items-center">"{feedback.quote}"</p>
                                <div className="flex items-center justify-start text-left mb-3">
                                    {feedback.image ? <img className="w-20 h-20 rounded-full mr-5" src={feedback.image} alt="feedback" />
                                        :
                                        <UserCircleIcon className="w-20 h-20 rounded-full mr-5"></UserCircleIcon>
                                    }
                                    <span
                                        className="title-font font-medium text-white">{feedback.name},<br/> {feedback.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}