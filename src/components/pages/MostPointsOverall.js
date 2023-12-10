import { useContext } from 'react';
import Table from '../Table';
import { StatisticsContext } from '../../context/useStatisticsContext';

const MostPointsOverall = () => {
    const statistics = useContext(StatisticsContext);
    const playerStatistics = statistics.reduce((obj, next) => {
        const [player, , , points] = next;
        if (obj[player]) {
            obj[player] += Number(points);
        } else {
            obj[player] = Number(points);
        }
        return obj;
    }, {});
    const sortedStatistics = Object.entries(playerStatistics).sort(
        (row1, ro2) => {
            return ro2[1] - row1[1];
        }
    );

    return (
        <>
            <h1>Most points scored Overall</h1>
            <Table
                colNames={['Placement', 'Player Name', 'Points Scored']}
                statistics={sortedStatistics}
            />
        </>
    );
};

export default MostPointsOverall;
