function triangle (src ,num){
    if(src === 0 || '') return '';

    let result ="";

    for (let i =1 ; i<= num ; i++){
        result +=  CharacterData.repeat(i);
        if (i< num) result += "\n";
        
    }


}