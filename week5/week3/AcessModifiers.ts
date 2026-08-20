class Student {

    public name: string;
    private age: number;
    protected course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    public display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

class Details extends Student {

    showCourse(): void {
        console.log("Course:", this.course);
    }
}

// Creating object
let student = new Details("Sri Lakshmi", 19, "CSE");

// Public member can be accessed outside
console.log(student.name);

// Private member cannot be accessed directly
// console.log(student.age);  // Error

// Protected member cannot be accessed directly outside class
// console.log(student.course);  // Error

student.display();
student.showCourse();