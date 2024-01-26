import React from 'react';
import {useNavigate} from 'react-router-dom';
import { projects } from '../data.js'; // adjust this with the correct import path

const BlogFooter = () => {
    const navigate = useNavigate();
    const relevantPosts = projects.slice(-3);
    return (
        <div className="grid grid-cols-3 gap-4">
            {relevantPosts.map((project) => (
                <button
                    key={project.id}
                    className="btn-primary"
                    onClick={() => navigate(`/blog/${project.id}`)}
                >
                    <img src={project.image} alt={project.subtitle} className="w-12 h-12 object-cover"/>
                    {/* Here we are adding the 'font-bold', 'bg-white', and 'bg-opacity-50' classes to the subtitle */}
                    <div className="text-black rounded font-bold bg-white bg-opacity-50">{project.subtitle}</div>
                    <div>{project.description}</div>
                </button>
            ))}
        </div>
    );
}
export default BlogFooter;