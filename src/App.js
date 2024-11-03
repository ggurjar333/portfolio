// src/App.js
import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Feedbacks from "./components/Feedbacks";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";

export default function App() {
    useEffect(() => {
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = 'https://embed.tawk.to/661cf2ffa0c6737bd12bd81d/1hrghae9v';
        // s1.src = process.env.REACT_APP_TAWK_TO_SRC;
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        document.body.appendChild(s1);
    }, []);

    return (
        <Router>
            <main className='text-gray-400 bg-gray-900 body-font'>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Navbar />
                            <About />
                            <Feedbacks />
                            <Skills />
                            <Contact />
                            <Footer />
                        </>
                    }/>
                    {/* <Route path='/blog/:id' element={<Blog />} /> */}
                </Routes>
            </main>
        </Router>
    );
}