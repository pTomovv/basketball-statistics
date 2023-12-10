import { useContext } from 'react';
import Table from '../Table';
import { StatisticsContext } from '../../context/useStatisticsContext';

const Home = () => {
    const statistics = useContext(StatisticsContext);

    return (
        <Table
            colNames={[
                'Placement',
                'Plaer Name',
                'Team',
                'Time Played',
                'Points Scored',
            ]}
            statistics={statistics}
        />
    );
};

export default Home;
