function id(arg)
{
    return arg;
}
function getLength(arg)
{
    if(typeof(arg)=="object"||typeof(arg)=="string"){
        return arg.length;
    }
    return;
}
// Testing id function
console.log(id(5)); // Should output 5
console.log(id("hello")); // Should output 'hello'
console.log(id([1, 2, 3])); // Should output [1, 2, 3]

// Testing getLength function
console.log(getLength("hello")); // Should output 5
console.log(getLength([1, 2, 3])); // Should output 3
console.log(getLength([])); // Should output 0
console.log(getLength("")); // Should output 0
