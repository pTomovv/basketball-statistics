import { useContext } from 'react';
import { StatisticsContext } from '../../context/useStatisticsContext';

const MostPointsInAMatch = () => {
    const statistics = useContext(StatisticsContext);
    let sortedStatistics = statistics.map((x) => x);
    sortedStatistics.sort((obj1, obj2) => {
        return obj2.points - obj1.points;
    });

    return (
        <>
            <h1>Most points scored in a single match</h1>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Time Played</th>
                        <th>Points Scored</th>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default MostPointsInAMatch;
