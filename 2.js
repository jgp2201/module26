function manipulateString(str) {

    const upperStr = str.toUpperCase();
    return function logString() {
        console.log(`The manipulated string is: ${upperStr}`);
    };
}

const result = manipulateString("hello world");
result();

