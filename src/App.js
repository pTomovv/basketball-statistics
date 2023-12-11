import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import {
    splitStringToArray,
    formatArrayToMatrix,
    matrixToArrayWithObjects,
} from './utils/statisticsUtils';
import { useState } from 'react';
import { StatisticsContext } from './context/useStatisticsContext';

function App() {
    const [statistics, setStatistics] = useState([]);

    function handleFileUpload(e) {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        const errors = [];

        reader.readAsText(file);
        reader.onload = function () {
            const statisticsArr = splitStringToArray(reader.result);
            const statisticsMatrix = formatArrayToMatrix(statisticsArr);

            statisticsMatrix.forEach((row, index) => {
                if (row.length !== 4) {
                    errors.push(index + 1);
                }
            });

            if (errors.length) {
                errors.forEach((error) =>
                    console.error(`Data on row ${error} is invalid`)
                );
            }
            const usableStatistics = matrixToArrayWithObjects(statisticsMatrix);

            setStatistics(usableStatistics);
        };
    }

    return (
        <div className="App">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/most-points-in-a-match">
                    Most points scored in a single match
                </NavLink>
                <NavLink to="/most-points-overall">
                    Most points scored Overall
                </NavLink>
                <NavLink to="/most-points-based-on-time-played">
                    Most Points Based On Time Played
                </NavLink>
                <NavLink to="/most-points-by-team">Most Points By Team</NavLink>
                <NavLink to="/best-player-in-a-team">Sorted</NavLink>
            </nav>
            <input type="file" onChange={handleFileUpload} />
            <StatisticsContext.Provider value={statistics}>
                {!!statistics.length ? <Outlet /> : <h1>no data</h1>}
            </StatisticsContext.Provider>
        </div>
    );
}

export default App;
