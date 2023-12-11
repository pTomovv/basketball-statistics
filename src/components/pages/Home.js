import { useContext } from 'react';
import { StatisticsContext } from '../../context/useStatisticsContext';

const Home = () => {
    const statistics = useContext(StatisticsContext);

    return (
        <>
            <h1>Unorderred Data</h1>
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
                    {statistics.map((obj, index) => {
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

export default Home;
