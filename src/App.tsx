import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Content/Login/Login";
import Goals from './components/Content/Goals/Goals';
import Results from "./components/Content/Results/Results";
import Inspiration from "./components/Content/Inspiration/Inspiration";
import Motivation from "./components/Content/Motivation/Motivation";
import Training from "./components/Content/Training/Training";
import Meditation from "./components/Content/Meditation/Meditation";
import Error404 from './components/Error404';
import './App.css';

function App() {

    const userLoggedIn: Boolean = false;

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {userLoggedIn ? <Route index element={<Goals />} /> : <Route index element={<Login/>} />}
                <Route path="results" element={<Results/>} />
                <Route path="inspiration" element={<Inspiration/>} />
                <Route path="motivation" element={<Motivation/>} />
                <Route path="training" element={<Training/>} />
                <Route path="meditation" element={<Meditation/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
