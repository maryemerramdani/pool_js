function reverse(input) {
  if (Array.isArray(input)) {
    let arr = [];
    for (let i = input.length - 1; i >= 0; i--) {
      arr.push(input[i]);
    }
    return arr;
  }
  let arr = "";
  for (let i = input.length - 1; i >= 0; i--) {
    arr+=input[i]
  }
  return arr;
}

console.log(reverse("pouet"));