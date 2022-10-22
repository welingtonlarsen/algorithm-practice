const input = 5;

const calculate = (number) => {
    let result = number;
    for (let index = number - 1; index > 0; index--) {
        result = result * index;
    }
    return result;
}

console.log(`Factorial of ${input} is: ${calculate(input)}`);
