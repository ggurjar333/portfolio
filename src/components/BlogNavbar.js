import React from 'react';
// import {useNavigate} from 'react-router-dom';
import {ArrowRightIcon} from "@heroicons/react/solid";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="/" className="ml-3 text-xl">
                        Gaurav Gurjar
                    </a>
                </div>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="/#projects" className="mr-5 hover:text-white">
                        Recent Projects
                    </a>
                    <a href="/#testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </a>
                    <a href="/#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                </nav>
                <a href="/#contact"
                   className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Ask for a Quote?
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}
// const BlogNavbar = ({ nextPostId, prevPostId }) => {
//     // const navigate = useNavigate();
//     return (
//             <nav className="flex justify-between">
//                 {prevPostId && (
//                     <button className="btn-primary" onClick={() => navigate(`/blog/${prevPostId}`)}>Previous</button>
//                 )}
//                 {nextPostId && (
//                     <button className="btn-primary" onClick={() => navigate(`/blog/${nextPostId}`)}>Next</button>
//                 )}
//             </nav>
//     );
// }
// export default BlogNavbar;