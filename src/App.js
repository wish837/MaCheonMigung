import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import End from "./pages/End";

function App() {
    return (
        <div className="container">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/end" element={<End />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;