function RNA(dna) {
  const a = {
    G:"C",
    C:"G",
    T:"A",
    A:"U"
  };
  return dna
    .split("")
    .map(base => a[base])
    .join("");
}
function DNA(rna) {
  const b = {
    C:"G",
    G:"C",
    A:"T",
    U:"A"
  };
  return rna
    .split("")
    .map(base => b[base])
    .join("");
}