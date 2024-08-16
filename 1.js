function doubleArray(arr, callback) {
    return arr.map(callback);
}
function doubleElement(element) {
    return element * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleElement);

console.log(doubledNumbers);
