import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
// Import pages
import Landing from '../Pages/Landing';
import React from 'react';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
