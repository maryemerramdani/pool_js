function get(src, path) {
  const keys = path.split(".");
  let a = src;
  for (const key of keys) {
    if (a == null||!(key in a)) {
      return undefined;
    }
    a=a[key];
  }
  return a;
}



