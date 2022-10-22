const input = 0;

const calculate = (number) => {
    if (number === 1 || number === 0) return 1;
    return number * calculate(number - 1);
}

console.log(`Factorial of ${input} is: ${calculate(input)}`);
