function splitStringToArray(string) {
    return string.split(/(\r\n|\r|\n)/g);
}

function formatArrayToMatrix(array) {
    return array
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(',').map(trimString));
}

function matrixToArrayWithObjects(arr) {
    return arr.map((row) => {
        const [name, team, time, points] = row;
        return {
            name,
            team,
            time,
            points,
        };
    });
}

function trimString(string) {
    return string.trim();
}

export { splitStringToArray, formatArrayToMatrix, matrixToArrayWithObjects };
