function sameAmount(str , reg1 , reg2){
    const matches1 = str.match(reg1);
    const matches2 = str.match(reg2);

    const count1 = matches1 ?  matches1.length : 0;
    const count2 = matches2 ?  matches2.length : 0;

    return count1 === count2 ;
}