import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import I from './Info'
import Moving from './Nav'

const Begin = () => {

    return (
        <div>
          < Moving/>
            <BrowserRouter>
                <Routes>
                    <Route path="/infopokemons" element={<App />}></Route>
                    <Route path="/about" element={<I />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Begin;