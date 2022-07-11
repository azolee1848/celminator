import React from 'react';
import {UserContext} from "./context/UserContext";
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

    const user: boolean = true;

  return (
    <div className="App">
        <UserContext.Provider value={user} >
        <BrowserRouter>
            <Routes>
                <Route index element={user ? <Goals /> : <Login/>} />
                <Route path="results" element={<Results/>} />
                <Route path="inspiration" element={<Inspiration/>} />
                <Route path="motivation" element={<Motivation/>} />
                <Route path="training" element={<Training/>} />
                <Route path="meditation" element={<Meditation/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    </div>
  );
}

export default App;
