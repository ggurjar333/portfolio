import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data.js";
import BlogNavbar from "./BlogNavbar";
import { SparklesIcon } from "@heroicons/react/solid";
import BlogFooter from "./BlogFooter";
export default function Blog() {
    const { id } = useParams();


    const project = projects.find((project) => project.id === id);

    // If project not found, return an error message.
    if (!project) return <h2>Project not found</h2>;

    return (
        <div>
            <BlogNavbar/>

            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className="col-span-2 space-y-4">
                    <p className="text-white inline-flex font-bold text-xl"><SparklesIcon className="w-4 h-4 ml-1"/>
                    </p>{project.blog.type}
                    <img
                        className='w-1/2 mx-auto object-cover rounded-md bg-white p-3'
                        src={project.blog.image}
                        alt={project.title}>
                    </img>
                    <div>
                        <p className='text-indigo-600 mb-2'><b>{project.subtitle}</b>
                        </p>
                        <h1 className='text-3xl font-extrabold'>
                            <b>Responsible as a {project.title} for the first 33 months.</b>
                        </h1>
                        <p>
                            <i>{project.description}</i>
                        </p>
                        <br/>
                        <h1 className="text-2xl font-extrabold">Challenges:</h1>
                        <p className="italic">{project.blog.challenge.intro}</p>
                        <br/>
                        <h2 className="text-xl">{project.blog.challenge.points.point1.title}:</h2>
                        <p className="italic">{project.blog.challenge.points.point1.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.challenge.points.point2.title}:</p>
                        <p className="italic">{project.blog.challenge.points.point2.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.challenge.points.point3.title}:</p>
                        <p className="italic">{project.blog.challenge.points.point3.description}</p>
                        <br/>
                        <h1 className="text-2xl font-extrabold">Solution:</h1>
                        <p>{project.blog.solution.intro}</p>
                        <br/>
                        <p className="text-xl">{project.blog.solution.points.point1.title}:</p>
                        <p className="italic">{project.blog.solution.points.point1.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.solution.points.point2.title}:</p>
                        <p className="italic">{project.blog.solution.points.point2.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.solution.points.point3.title}:</p>
                        <p className="italic">{project.blog.solution.points.point3.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.solution.points.point4.title}:</p>
                        <p className="italic">{project.blog.solution.points.point4.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.solution.points.point5.title}:</p>
                        <p className="italic">{project.blog.solution.points.point5.description}</p>
                        <br/>
                        <h1 className="text-2xl font-extrabold">Impact:</h1>
                        <p className="italic">{project.blog.impact}</p>
                        <br/>
                        <p className="text-xl">{project.blog.details.points.point1.title}:</p>
                        <p className="italic">{project.blog.details.points.point1.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.details.points.point2.title}:</p>
                        <p className="italic">{project.blog.details.points.point2.description}</p>
                        <br/>
                        <p className="text-xl">{project.blog.details.points.point3.title}:</p>
                        <p className="italic">{project.blog.details.points.point3.description}</p>
                    </div>
                </div>
                <br/>
                <br/>
                <h2 className="text-4xl font-extrabold">Relevant Stories</h2>
                <BlogFooter/>
            </div>
        </div>
    );
}