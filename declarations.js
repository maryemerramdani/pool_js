const escapeStr = "\`,\/,\/,\",\'";
arr=[4,'2'];
obj = 
{
    "str" : "zone01",
    "num" : 44,
    "bool" : true,
    "undef" : undefined
};
nested=
{
    arr:[4,undefined,'2'],
    obj:{
        "str": "bonjour",
        "num": 5,
        "bool":true
    }
};
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);

