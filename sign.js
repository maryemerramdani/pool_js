function sign (a){
    if(a>0){
        return 1;
    }
    if(a<0){
        return -1;
    }
        return 0;
}
function sameSign(a,b){
    return sign(a) == sign(b);
}