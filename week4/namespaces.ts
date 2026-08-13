namespace Student {
    export let name: string = "Sri Lakshmi";

    export function display() {
        console.log("Student Name:", name);
    }
}
/*Why export is used?

Members inside a namespace are private by default. To access them outside the namespace, we use export.*/

Student.display();