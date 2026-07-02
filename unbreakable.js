function split(str, separator) {
  const result = [];
  if (separator === "") {
    for (let i = 0; i < str.length; i++) {
      result[result.length] = str[i];
    }
    return result;
  }

  let current = "";

  for (let i = 0; i < str.length; i++) {
    let match = true;

    for (let j = 0; j < separator.length; j++) {
      if (str[i + j] !== separator[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      result[result.length] = current;
      current = "";
      i += separator.length - 1;
    } else {
      current += str[i];
    }
  }

  result[result.length] = current;
  return result;
}

function join(arr, separator) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      result += separator;
    }
    result += arr[i];
  }
  return result;
}