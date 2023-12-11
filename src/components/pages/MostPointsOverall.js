import { useContext } from 'react';
import { StatisticsContext } from '../../context/useStatisticsContext';

const MostPointsOverall = () => {
    const statistics = useContext(StatisticsContext);

    const playerStatistics = [];
    statistics.forEach((obj) => {
        let index = playerStatistics.findIndex((el) => {
            return el.name === obj.name;
        });

        if (index !== -1) {
            playerStatistics[index].points += +obj.points;
        } else {
            playerStatistics.push({
                name: obj.name,
                team: obj.team,
                time: +obj.time,
                points: +obj.points,
            });
        }
    });

    const sortedStatistics = playerStatistics.sort((obj1, obj2) => {
        return obj2.points - obj1.points;
    });

    return (
        <>
            <h1>Most points scored Overall</h1>
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

export default MostPointsOverall;
