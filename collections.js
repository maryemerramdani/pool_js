export function arrToSet(arr) {
  return new Set(arr);
}

export function arrToStr(arr) {
  return arr.join('');
}

export function setToArr(set) {
  return Array.from(set);
}

export function setToStr(set) {
  return Array.from(set).join('');
}

export function strToArr(str) {
  return str.split('');
}

export function strToSet(str) {
  return new Set(str);
}

export function mapToObj(map) {
  return Object.fromEntries(map);
}

export function objToArr(obj) {
  return Object.values(obj);
}

export function objToMap(obj) {
  return new Map(Object.entries(obj));
}

export function arrToObj(arr) {
  return { ...arr };
}

export function strToObj(str) {
  return { ...str.split('') };
}

export function superTypeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
