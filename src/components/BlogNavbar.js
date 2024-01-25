import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogNavbar = ({ nextPostId, prevPostId }) => {
    const navigate = useNavigate();

    return (
        <nav>
            {prevPostId &&(
                <button onClick={() => navigate(`/blog/${prevPostId}`)}>Previous</button>
            )}
            {nextPostId &&(
                <button onClick={() => navigate(`/blog/${nextPostId}`)}>Next</button>
            )}
        </nav>
    )
}

export default BlogNavbar;