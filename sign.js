function sign (a){
    if(a>0){
        return 1;
    }
    if(a<0){
        return -1;
    }
        return 0;
}
function sameign(a,b){
    return sign(a) == sign(b);
}
// Test sign function
console.log(sign(3)); // Should output 1
console.log(sign(-3)); // Should output -1
console.log(sign(0)); // Should output 0

// Test sameSign function
console.log(sameSign(3, 4)); // Should output true
console.log(sameSign(-3, -4)); // Should output true
console.log(sameSign(0, 0)); // Should output true
console.log(sameSign(3, -4)); // Should output false
console.log(sameSign(0, 4)); // Should output false
console.log(sameSign(0, -4)); // Should output false