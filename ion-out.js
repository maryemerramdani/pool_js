function ionOut(str) {
  const matches = str.match(/\b\w*t(?=ion)\w*\b/g)||[];
  return matches.map(word => word.replace(/ion/g,""));
}



console.log(ionOut("creation fiction emotion"));
// Output: ['creat', 'fict', 'emot']