import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data.js";
import BlogNavbar from "./BlogNavbar";
import { SparklesIcon } from "@heroicons/react/solid";
import BlogFooter from "./BlogFooter";
import Footer from "./Footer";
export default function Blog() {
    const { id } = useParams();

    const project = projects.find((project) => project.id === id);
    // If project not found, return an error message.
    if (!project) return <h2>Project not found</h2>;
    return (
        <div>
            <BlogNavbar/>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white'>
                <div className="col-span-2 space-y-4">
                    {/*<p className="text-white inline-flex font-bold text-xl"><SparklesIcon className="w-4 h-4 ml-1"/>*/}
                    {/*</p>{project.blog.type}*/}
                    <img
                        className='w-1/2 mx-auto object-cover rounded-md p-3'
                        src={project.blog.image}
                        alt={project.title}>
                    </img>
                    <div className="text-white">
                        {/*<p className='text-white mb-2'>{project.blog.title}, {project.blog.company}</p>*/}
                        <h1 className='text-3xl font-light'>
                            {project.title} - {project.subtitle}
                        </h1>
                        <p>{project.description} </p>
                        <br/>
                        <h1 className="text-2xl font-semibold">{project.blog.challenge.intro}</h1>
                        <br/>
                        <h2 className="text-xl">{project.blog.challenge.title}:</h2>
                        <p>{project.blog.challenge.description}</p>
                        <br/>
                        <h1 className="text-2xl font-semibold">{project.blog.solution.intro}</h1>
                        <br/>
                        <p className="text-xl">{project.blog.solution.title}:</p>
                        <p>{project.blog.solution.description}</p>
                        <br/>
                        <h1 className="text-2xl font-semibold">{project.blog.impact.intro}</h1>
                        <p>{project.blog.impact.title}</p>
                        <br/>
                        {/* <p className="text-xl">{project.blog.impact.description}:</p> */}
                        <p>{project.blog.impact.description}</p>
                        <br/>
                    </div>
                </div>
                <br/>
                <br/>
                {/*<h2 className="text-4xl font-semibold">Client Stories</h2>*/}
                {/*<BlogFooter/>*/}
            </div>
            <Footer/>
        </div>
    );
}