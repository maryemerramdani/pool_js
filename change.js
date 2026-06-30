const sourceObject = {
  num: 42,
  bool: true,
  str: "some text",
  log: console.log,
};

function Get(key){
    return sourceObject[key];
}

function Set(key,value){
    sourceObject[key]=value;
    return sourceObject[key];
}
