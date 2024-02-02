// src/components/About.js

import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="flex-grow md:w-1/2 lg:pr-22 md:pr-16 flex flex-col items-center text-center md:items-start md:text-left mb-16 md:mb-0">
                    <h1 className="title-font text-3xl mb-4 font-medium text-white sm:text-4xl @screen lg {text-5xl}">
                        Gaurav is a Fullstack Consultant based in Dubai.
                    </h1>
                    <p className="mb-8 leading-relaxed ...">
                        I build apps and data pipelines. I aim to reflect my capabilities, experiences, and achievements in the realm of full-stack data engineering.
                    </p>
                    <div className="flex justify-center ...">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded text-lg ...">
                            Work With Me
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg ...">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center border border-black"
                        src="https://raw.githubusercontent.com/ggurjar333/github-stats/master/generated/overview.svg#gh-light-mode-only"
                        alt="My GitHub stats"
                    />
                    <img
                        className="object-cover object-center border border-black"
                        src="https://raw.githubusercontent.com/ggurjar333/github-stats/master/generated/languages.svg#gh-light-mode-only"
                        alt="My GitHub stats"
                    />
                </div>
            </div>
        </section>
    );
}