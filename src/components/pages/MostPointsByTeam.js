import { useContext } from 'react';
import { StatisticsContext } from '../../context/useStatisticsContext';

const MostPointsByTeam = () => {
    const statistics = useContext(StatisticsContext);

    const teamStatistics = [];
    statistics.forEach((obj) => {
        let index = teamStatistics.findIndex((el) => {
            return el.team === obj.team;
        });

        if (index !== -1) {
            teamStatistics[index].points += +obj.points;
        } else {
            teamStatistics.push({
                team: obj.team,
                points: +obj.points,
            });
        }
    });

    const sortedStatistics = teamStatistics.sort((obj1, obj2) => {
        return obj2.points - obj1.points;
    });

    return (
        <>
            <h1>Most points By Team</h1>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Team</th>
                        <th>Points Scored</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStatistics.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{obj.team}</td>
                                <td>{obj.points}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default MostPointsByTeam;
