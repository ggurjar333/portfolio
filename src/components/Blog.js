import React from "react";
import {useParams} from "react-router-dom";
import {projects} from "../data.js";
import BlogNavbar from "./BlogNavbar";
import BlogFooter from "./BlogFooter";
import Footer from "./Footer";

export default function Blog() {
    const {id} = useParams();
    const project = projects.find((project) => project.id === id);

    // If project not found, return an error message.
    if (!project) return <h2>Project not found</h2>;

    // Extracted repeated code block into a new function
    function SectionText({title, description}) {
        return (
            <>
                <p className="text-xl"><b>{title}</b>:</p>
                <p>{description}</p>
                <br/>
            </>
        );
    }

    return (
        <div>
            <BlogNavbar/>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white'>
                <div className="col-span-2 space-y-4">
                    ...
                    {project.blog.challenge.points.map((point, index) =>
                        <SectionText key={'challenge-' + index} title={point.title} description={point.description}/>
                    )}
                    <h1 className="text-2xl font-semibold">Solution:</h1>
                    <p>{project.blog.solution.intro}</p>
                    <br/>
                    {project.blog.solution.points.map((point, index) =>
                        <SectionText key={'solution-' + index} title={point.title} description={point.description}/>
                    )}
                    <h1 className="text-2xl font-semibold">Impact:</h1>
                    <p>{project.blog.impact}</p>
                    <br/>
                    {project.blog.details.points.map((point, index) =>
                        <SectionText key={'details-' + index} title={point.title} description={point.description}/>
                    )}
                </div>
                <br/>
                <br/>
                <BlogFooter/>
            </div>
            <Footer/>
        </div>
    );
}