const person = {
  name: "Rick",
  age: 77,
  country: "US",
};
const colone1 = structuredClone(person);
const colone2 = structuredClone(person);
const samePerson =person;
person.age+=1;
person.country='FR';
console.log(person.age === 78);
console.log(person.country === "FR");

console.log(colone1.age === 77);
console.log(colone1.country === "US");

console.log(colone2.age === 77);
console.log(colone2.country === "US");

console.log(samePerson.age ===78);
console.log(samePerson.country === "FR");