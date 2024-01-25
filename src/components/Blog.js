import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data.js";
import BlogNavbar from './BlogNavbar';

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
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <BlogNavbar prevPostId={prevPostId} nextPostId={nextPostId} />
            <div className="space-y-4">
                <img
                    className='w-1/2 mx-auto object-cover rounded-md'
                    src={project.image}
                    alt={project.title}>
                </img>
                <div>
                    <p className='text-indigo-600 mb-2'>{project.subtitle}</p>
                    <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        {project.title}
                    </h1>
                </div>
                <div className='prose max-w-none'>
                    <p>{project.description}</p>
                </div>
                <div className='prose max-w-none'>
                    <p>{project.impact}</p>
                </div>
                <BlogNavbar prevPostId={prevPostId} nextPostId={nextPostId} />
            </div>
        </div>
    );
}