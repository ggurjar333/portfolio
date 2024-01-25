import React from "react";

const AboutProject = ({ project }) => {
    return (
        <div className="bg-gray-200 p-4">
            <h2>About the project</h2>
            <div>Client: {project.client}</div>
            <div>Location: {project.location}</div>
            <div>Sector: {project.sector}</div>
            <div>Audience: {project.audience}</div>
            <div>Expertise: {project.expertise}</div>
            <div>Geographic Scope: {project.geographicScope}</div>
            <div>Date: {project.date}</div>
        </div>
    );
};
export default AboutProject;