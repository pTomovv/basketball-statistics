import { useContext } from 'react';
import Table from '../Table';
import { StatisticsContext } from '../../context/useStatisticsContext';

const MostPointsInAMatch = () => {
    const statistics = useContext(StatisticsContext);
    const sortedStatistics = statistics;
    sortedStatistics.sort((row1, row2) => {
        return row2[3] - row1[3];
    });

    return (
        <>
            <h1>Most points scored in a single match</h1>
            <Table
                colNames={[
                    'Placement',
                    'Plaer Name',
                    'Team',
                    'Time Played',
                    'Points Scored',
                ]}
                statistics={sortedStatistics}
            />
        </>
    );
};

export default MostPointsInAMatch;
