// Variables
let studentName: string = "Sri Lakshmi";
let age: number = 19;
let isStudent: boolean = true;

// Array
let subjects: string[] = ["TypeScript", "Java", "Machine Learning"];

// Function
function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

// Object
let student = {
    name: studentName,
    age: age,
    isStudent: isStudent
};

// Output
console.log(greet(studentName));
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Subjects:", subjects);
console.log("Student Details:", student);