const unsorted = [10, 7, 15, 18, 2, 3, 5, 4, 1];

for(let index = 0; index < unsorted.length; index++) {
    let currentIndex = index;
    let currentValue = unsorted[currentIndex];
    let previousValue = unsorted[currentIndex - 1];

    while (currentIndex !== 0 && currentValue < previousValue) {
        unsorted[currentIndex] = previousValue;
        unsorted[currentIndex - 1] = currentValue;

        currentIndex--;
        currentValue = unsorted[currentIndex];
        previousValue = unsorted[currentIndex - 1];
    }
}

console.log(unsorted);
