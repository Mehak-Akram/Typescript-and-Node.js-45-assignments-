//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



//Data types of person object
interface person{
    name: string,
    nationality: string,
    age: number,
    student: Boolean,
}

//peron object

let person :person = {
    name: "Mehak",
    nationality: "Pakistan",
    age: 18,
    student: true,
}

console.log(person);