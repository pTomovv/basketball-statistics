const Table = ({ colNames, statistics }) => {
    return (
        <table>
            <thead>
                <tr>
                    {colNames.map((title, index) => {
                        return <th key={index}>{title}</th>;
                    })}
                    {/* <th>Player Name</th>
                    <th>Team</th>
                    <th>Time played(s)</th>
                    <th>Points Scored</th> */}
                </tr>
            </thead>
            <tbody>
                {statistics.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}.</td>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
