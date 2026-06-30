function first(arg){
    if (typeof(arg) == "object" || typeof(arg) == "string"){
        return arg[0];
    }
    return;
}
function last(arg){
    if (typeof(arg) == "object" || typeof(arg) == "string"){
        return arg[arg.length-1];
    }
    return;
}
function kiss(arg){
    if (typeof(arg) == "object" || typeof(arg) == "string"){
        return [arg[arg.length-1],arg[0]];
    }
    return;
}
// Test the first function
console.log(first([1, 2, 3])); // Should output 1
console.log(first("hello")); // Should output "h"

// Test the last function
console.log(last([1, 2, 3])); // Should output 3
console.log(last("hello")); // Should output "o"

// Test the kiss function
console.log(kiss([1, 2, 3])); // Should output [3, 1]
console.log(kiss("hello")); // Should output ["o", "h"]