// src/App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// import Services from "./components/Services";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Footer from "./components/Footer";

export default function App() {
    return (
        <Router>
            <main className='text-gray-400 bg-gray-900 body-font'>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Navbar />
                            <About />
                            <Projects />
                            <Testimonials />
                            <Skills />
                            {/*<Services></Services>*/}
                            <Contact />
                            <Footer />
                        </>
                    }/>
                    <Route path='/blog/:id' element={<Blog />} />
                </Routes>
            </main>
        </Router>
    );
}