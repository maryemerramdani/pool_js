function indexOf (arr, value, start=0){
    if(!Array.isArray(arr)) return -1;
    for(let i = start ; i < arr.length ; i++){
        if(arr[i] === value){
            return i ;
         }
    }
    return -1;
}
function lastIndexOf (arr , value, start = arr.length -1){
    if(!Array.isArray(arr)) return -1;

    for(let i = start ; i>=0 ; i--){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
function includes ( arr ,value ,start=0){ 
return indexOf (arr , value, start) !== -1 ;
}
