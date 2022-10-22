const unsorted = [10, 7, 15, 18, 2, 3, 5, 4, 1];

const sort = (firstArray, secondArray) => {
    let firstArrayPosition = 0;
    let secondArrayPosition = 0;
    const result = [];

    while (firstArrayPosition < firstArray.length && secondArrayPosition < secondArray.length) {
        let currentFirstArrayValue = firstArray[firstArrayPosition];
        let currentSecondArrayValue = secondArray[secondArrayPosition];

        if (currentFirstArrayValue < currentSecondArrayValue) {
            result.push(currentFirstArrayValue);
            firstArrayPosition++;
        } else {
            result.push(currentSecondArrayValue);
            secondArrayPosition++;
        }
    }

    return result.concat(firstArrayPosition < firstArray.length ?
        firstArray.slice(firstArrayPosition)
        : secondArray.slice(secondArrayPosition));
}

const mergeSort = (array) => {
    if (array.length > 1) {
        const middleIndex = Math.floor(array.length/2);
        const firstArray = mergeSort(array.slice(0, middleIndex));
        const secondArray = mergeSort(array.slice(middleIndex, array.length));
        array = sort(firstArray, secondArray)
    }
    return array;
}

console.log(mergeSort(unsorted));
