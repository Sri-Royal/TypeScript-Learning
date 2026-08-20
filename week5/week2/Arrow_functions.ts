// Arrow function without parameters
const greet = (): void => {
    console.log("Hello!");
};

// Arrow function with parameters
const add = (a: number, b: number): void => {
    console.log("Sum =", a + b);
};

// Arrow function with return type
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Calling functions
greet();

add(10, 20);

let result = multiply(5, 4);
console.log("Product =", result);