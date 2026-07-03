function letterSpaceNumber (str){
    return str.match(/[A-Za-z]\s\d(?![\dA-Za-z])/g) || [] ;
}
console.log(letterSpaceNumber("example 1, example 20"));