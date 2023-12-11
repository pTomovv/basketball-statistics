import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MostPointsInAMatch from './components/pages/MostPointsInAMatch';
import MostPointsOverall from './components/pages/MostPointsOverall';
import MostPointsBasedOnTimePlayed from './components/pages/MostPointsBasedOnTimePlayed';
import MostPointsByTeam from './components/pages/MostPointsByTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/most-points-in-a-match"
                        element={<MostPointsInAMatch />}
                    />
                    <Route
                        path="/most-points-overall"
                        element={<MostPointsOverall />}
                    />
                    <Route
                        path="/most-points-based-on-time-played"
                        element={<MostPointsBasedOnTimePlayed />}
                    />
                    <Route
                        path="/most-points-by-team"
                        element={<MostPointsByTeam />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
