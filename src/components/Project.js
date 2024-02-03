/** @jsxImportSource @emotion/react */
import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    @media(min-width: 640px) {
        width: 50%;
    }
`;

const ProjectContainer = styled.div`
    display: flex;
    position: relative;
    object-fit: cover;
    border-radius: .375rem;
    border: 1px solid #fefefe;
    background-color: #1f2937;
`;

const ProjectContent = styled.div`
    padding: 2rem;
    position: relative;
    width: 100%;
    border: 4px solid #fefefe;

    h2 {
        letter-spacing: .2em;
        font-size: .875rem;
        font-weight: 500;
        color: #10b981;
        margin-bottom: .25rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #fefefe;
        margin-bottom: .75rem;
    }

    p {
        line-height: 1.75;
    }
`;

export default function Project({ project }) {
    return (
        <StyledLink to={`/blog/${project.id}`} key={project.image}>
            <ProjectContainer>
                <ProjectContent>
                    <h2>{project.subtitle}</h2>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </ProjectContent>
            </ProjectContainer>
        </StyledLink>
    );
}