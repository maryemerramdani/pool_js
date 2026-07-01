function arrToSet(arr) {
  return new Set(arr);
}

function arrToStr(arr) {
  return arr.join("");
}

function setToArr(set) {
  return [...set];
}

function setToStr(set) {
  return [...set].join("");
}

function strToArr(str) {
  return [...str];
}

function strToSet(str) {
  return new Set(str);
}

function mapToObj(map) {
  return Object.fromEntries(map);
}

function objToArr(obj) {
  return Object.values(obj);
}

function objToMap(obj) {
  return new Map(Object.entries(obj));
}

function arrToObj(arr) {
  return { ...arr };
}

function strToObj(str) {
  return { ...str };
}

function superTypeOf(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  return Object.prototype.toString.call(value).slice(8, -1);
}
const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate will be ignored
set.add(3);
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");

// Test each function
console.log("arrToSet:", arrToSet(arr));
console.log("arrToStr:", arrToStr(arr));
console.log("setToArr:", setToArr(set));
console.log("setToStr:", setToStr(set));
console.log("strToArr:", strToArr(str));
console.log("strToSet:", strToSet(str));
console.log("mapToObj:", mapToObj(map));
console.log("objToArr:", objToArr(obj));
console.log("objToMap:", objToMap(obj));
console.log("arrToObj:", arrToObj(arr));
console.log("strToObj:", strToObj(str));

// Test superTypeOf with different types
console.log("superTypeOf(map):", superTypeOf(map));
console.log("superTypeOf(set):", superTypeOf(set));
console.log("superTypeOf(obj):", superTypeOf(obj));
console.log("superTypeOf(str):", superTypeOf(str));
console.log("superTypeOf(666):", superTypeOf(666));
console.log("superTypeOf(NaN):", superTypeOf(NaN));
console.log("superTypeOf(arr):", superTypeOf(arr));
console.log("superTypeOf(null):", superTypeOf(null));
console.log("superTypeOf(undefined):", superTypeOf(undefined));
console.log("superTypeOf(superTypeOf):", superTypeOf(superTypeOf));