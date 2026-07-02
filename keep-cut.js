function cutFirst (str){
    return str.slice (2);
}

function cutLast (str){
    return str.slice(0,-2);
}

function cutFirstLast(str){
    return str.slice(2,-2);
}

function keepFirst(str){
    return str.slice(0,2);
}

function keepLast (str){
    return str.slice(-2);
}

function keepFirsLast (str){
    if(str.lngth <= 3) return str ;
    return str.slice(0,2) + str.slice(-2);
} 
const str = " Js ";