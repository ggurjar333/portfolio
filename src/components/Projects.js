// src/components/Projects.js
import React from 'react';
import {CodeIcon} from '@heroicons/react/solid';
import {PAGE_CONTENT} from '../constants/messages.js';
import {projects} from '../data.js';
import Project from './Project.js';

export default function Projects() {
    const { TITLE, SUBTITLE } = PAGE_CONTENT.PROJECTS;

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">{TITLE}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{SUBTITLE}</p>
                </div>
                <div className="flex flex-wrap -m-8">
                    {projects.map((project) => (
                        <Project project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}