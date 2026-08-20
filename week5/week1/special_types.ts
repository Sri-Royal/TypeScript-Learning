// any
let data: any = 100;
console.log(data);

data = "Hello";
console.log(data);

// unknown
let userInput: unknown = "TypeScript";

if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}

// void
function greet(): void {
    console.log("Welcome!");
}

greet();

// never
function error(msg: string): never {
    throw new Error(msg);
}

// null and undefined
let x: null = null;
let y: undefined = undefined;

console.log(x);
console.log(y);

// object
let employee: object = {
    id: 1,
    name: "John"
};

console.log(employee);