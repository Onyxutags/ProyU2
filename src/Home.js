import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'


const Begin = () => {

    return (
        <div>
          
            <BrowserRouter>
                <Routes>
                    <Route path="/infopokemons" element={<App />}></Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Begin;