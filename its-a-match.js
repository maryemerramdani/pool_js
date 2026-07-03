const a =/ hi /;
const b =/^hi/;
const c=/hi$/;
const d =/^hi$/;
console.log(normal.test("oh hi there")); // true
console.log(begin.test("hi there")); // true
console.log(end.test("say hi")); // true
console.log(beginEnd.test("hi")); // true
console.log(beginEnd.test("hiya")); // false