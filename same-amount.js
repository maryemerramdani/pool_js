function sameAmount(str , reg1, reg2){
    const r1 = new RegExp(reg1.source, 'g');
    const r2 = new RegExp(reg2.source, 'g');

    const matches1 = str.match(r1);
    const matches2 = str.match(r2);

    const count1 = matches1 ?  matches1.length : 0;
    const count2 = matches2 ?  matches2.length : 0;

    return count1 === count2 ;
}