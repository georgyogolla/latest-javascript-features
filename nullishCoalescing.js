// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// leftExpr ?? rightExpr

const foo = null?? "hello";
console.log(foo); //

const myTxt = "";


const myText = myTxt?? "Hello, World!";
console.log(myText); // ""

// Combining optional chaining with nullish coalescing

const fooT = { someFooProp: "hi" };

console.log(fooT.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(fooT.someBarProp?.toUpperCase() ?? "not available"); // "not available"
