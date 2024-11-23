// Logical OR assignment operator
const todo = {
    priority: "",
    task: "Finish editing course"
};

todo.priority ||= console.log("The right side is truthy");
todo.priority || (todo.priority = "HIGH");

// Logical AND assignment operator
let num = 20;
num &&= 100;
// num && (num = 100); - checks if the value on the left is truthy then assigns the value on the right and returns it.

// Nullish coalescing assignment operator
let name;
console.log(name ??= "Kabambe"); // the right operand evaluates only if the left operand is null or undefined.

function updateObject(options = {}){
    options.name ??= "Georgy";
    options.age ??= 30;
    options.skinColor ??= "black";
    options.country ??= "Kenya";
    // console.log(options)
    return options;
}
const opt = updateObject();
console.log(opt);


