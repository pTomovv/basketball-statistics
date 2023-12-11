import { useContext } from 'react';
import { StatisticsContext } from '../../context/useStatisticsContext';

const MostPointsBasedOnTimePlayed = () => {
    const statistics = useContext(StatisticsContext);
    const modifiedStatistics = statistics.map((obj) => {
        obj.pointsByTime = (obj.points / obj.time).toFixed(3);
        return obj;
    });

    const sortedStatistics = modifiedStatistics.sort((obj1, obj2) => {
        return obj2.pointsByTime - obj1.pointsByTime;
    });

    return (
        <>
            <h1>Most Points Based On Time Played In A Single Game</h1>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Time Played</th>
                        <th>Points Scored</th>
                        <th>Points Scored Based On Time Played</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStatistics.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{obj.name}</td>
                                <td>{obj.team}</td>
                                <td>{obj.time}</td>
                                <td>{obj.points}</td>
                                <td>{obj.pointsByTime}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default MostPointsBasedOnTimePlayed;
