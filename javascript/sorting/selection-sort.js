const unsorted = [10, 7, 15, 18, 2, 3, 5, 4, 1];

const getLowest = (values, startPosition) => {
    let lowestPosition = startPosition;
    for (let currentPosition = startPosition; currentPosition < values.length; currentPosition++) {
        const currentValue = values[currentPosition];
        const lowestValue = values[lowestPosition];
        if (currentValue < lowestValue) lowestPosition = currentPosition;
    }
    return lowestPosition;
}

const sortUsingForLoop = (values) => {
    for (let index = 0; index < values.length - 1; index++) {
        const currentValue = values[index];
        const lowestPosition = getLowest(values, index);
        const lowestValue = values[lowestPosition];

        if (lowestValue < currentValue) {
            values[index] = values[lowestPosition];
            values[lowestPosition] = currentValue;
        }
    }
    return values;
}

const sortUsingForEach = (values) => {
    values.forEach((currentValue, index) => {
        const lowestPosition = getLowest(values, index);
        const lowestValue = values[lowestPosition];

        if (lowestValue < currentValue) {
            values[index] = values[lowestPosition];
            values[lowestPosition] = currentValue;
        }
    })
    return values;
}

console.log('Sort using for loop:');
console.log(sortUsingForLoop(unsorted));
console.log('Sort using foreach:')
console.log(sortUsingForEach(unsorted));
