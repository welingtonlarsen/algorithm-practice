const changePositions = (list, fromPosition, toPosition) => {
    const currentFromValue = list[fromPosition];
    const currentDestinationValue = list[toPosition];

    list[toPosition] = currentFromValue;
    list[fromPosition] = currentDestinationValue;
}

const partitionReturningPivotPosition = (list, beginning, end) => {
    const pivot = list[end];
    let indexFromNextValueLessThanPivot = beginning;

    for (let index = beginning; index < end; index++) {
        const actualValue = list[index];
        if (actualValue < pivot) {
            changePositions(list, index, indexFromNextValueLessThanPivot)
            indexFromNextValueLessThanPivot++
        }
    }

    const valueToBeReplacedByPivot = list[indexFromNextValueLessThanPivot];
    list[indexFromNextValueLessThanPivot] = pivot;
    list[end] = valueToBeReplacedByPivot;

    return indexFromNextValueLessThanPivot;
}

const quickSort = (list, beginning=0, end=list.length - 1) => {
    if (beginning < end) {
        const partitioned = partitionReturningPivotPosition(list, beginning, end);
        quickSort(list, 0, partitioned - 1);
        quickSort(list, partitioned + 1, end);
    }
}

const unsorted = [10, 7, 15, 18, 2, 3, 5, 4, 1];
quickSort(unsorted, 0, unsorted.length - 1);
console.log(unsorted);
