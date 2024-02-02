// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data.js";
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Recent Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        A testament to my dedication to becoming a better tech consultant with clean coding mindset day by day.
                    </p>
                </div>
                <div className="flex flex-wrap -m-8">
                    {projects.map((project) => (
                        <Link
                            to={`/blog/${project.id}`}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative mx-auto object-cover rounded-md border-red-100">
                                {/*<span className="border-white-500">*/}
                                {/*    <img*/}
                                {/*        alt="gallery"*/}
                                {/*        className="absolute inset-0 object-contain w-[250px] h-[250px]"*/}
                                {/*        src={project.image}*/}
                                {/*    />*/}
                                {/*</span>*/}

                                <div
                                    className="px-8 py-10 relative w-full border-4 border-white-800 bg-gray-900">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}