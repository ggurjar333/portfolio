import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data.js";
import BlogNavbar from "./BlogNavbar";

export default function Blog() {
    const { id } = useParams();

    // Find the current project index.
    const postIndex = projects.findIndex(project => project.id === id);

    // Initialize nextPostId and prevPostId
    let nextPostId = null, prevPostId = null;

    // If current project is found
    if (postIndex !== -1) {

        // If it is not the first, set previous project id.
        if (postIndex > 0) {
            prevPostId = projects[postIndex - 1].id;
        }

        // If it is not the last, set next project id.
        if (postIndex < projects.length - 1) {
            nextPostId = projects[postIndex + 1].id;
        }
    }

    const project = projects.find((project) => project.id === id);

    // If project not found, return an error message.
    if (!project) return <h2>Project not found</h2>;

    return (
        <div>
            <BlogNavbar/>
            {/*<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>*/}
            {/*    <div className="grid grid-col-3 gap-4"><AboutProject project={project}/></div>*/}
            {/*</div>*/}

            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className="col-span-2 space-y-4">
                    <img
                        className='w-1/2 mx-auto object-cover rounded-md bg-white p-3'
                        src={project.blog.image}
                        alt={project.title}>
                    </img>
                    <div>
                        <p className='text-indigo-600 mb-2'>{project.subtitle} for {project.blog.title}</p>
                        <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                            {project.title}
                        </h1>
                        <p>
                            {project.description}
                        </p>
                        <br/>
                        <h1>Challenges:</h1>
                        <p>{project.blog.challenge.intro}</p>
                        <br/>
                        <p>{project.blog.challenge.points.point1.title}</p>
                        <p>{project.blog.challenge.points.point1.description}</p>
                        <br/>
                        <h1>Solution:</h1>
                        <p>{project.blog.solution.intro}</p>
                        <br/>
                        <h1>Impact:</h1>
                        <p>{project.blog.impact}</p>
                    </div>
                </div>
                <BlogNavbar prevPostId={prevPostId} nextPostId={nextPostId}/>
            </div>
        </div>
    );
}