function triangle (src ,num){
    if(src <= 0 || src ==="" ){
        return "";
    }
    let result ="";

    for (let i =1 ; i<= num ; i++){
        result +=  src.repeat(i);
        if (i< num) 
            result += '\n';
    }
    return result;
}
// this just a test

