function greet(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Hello, ${name}!`);
        } else {
            reject("Name is required to generate a greeting.");
        }
    });
}
greet("Jayvardhan")
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });
