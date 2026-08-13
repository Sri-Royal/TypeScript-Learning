class Student {

    public name: string;
    readonly rollNo: number;
    static college: string = "SVECW";

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("College:", Student.college);
    }
}

// Creating objects
let student1 = new Student("Sri Lakshmi", 101);
let student2 = new Student("Anjali", 102);

student1.display();
student2.display();

// Accessing static member using class name
console.log("College:", Student.college);

// readonly value cannot be changed
// student1.rollNo = 105;  // Error