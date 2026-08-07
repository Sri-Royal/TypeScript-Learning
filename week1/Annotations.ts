// Type Annotations in TypeScript

// Number
let age: number = 20;
console.log("Age:", age);

// String
let studentName: string = "Sri Lakshmi";
console.log("Name:", studentName);

// Boolean
let isStudent: boolean = true;
console.log("Is Student:", isStudent);

// Array
let marks: number[] = [90, 95, 88];
console.log("Marks:", marks);

// Object
let student: {
    name: string;
    age: number;
} = {
    name: "Lakshmi",
    age: 20,
};

console.log(student);

// Function Annotation
function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(10, 20));

// Optional Parameter
function greetings(name: string, city?: string): void {
    if (city) {
        console.log(`Hello ${name} from ${city}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greetings("Lakshmi");
greetings("Lakshmi", "Bhimavaram");

// Union Type
let value: string | number;

value = "TypeScript";
console.log(value);

value = 100;
console.log(value);