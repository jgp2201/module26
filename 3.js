function ageInDays(person) {

    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;

    return function logMessage() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

const person = { firstName: "Jayvardhan", lastName: "Patel", age: 20 };
const logPersonDetails = ageInDays(person);
logPersonDetails(); 
