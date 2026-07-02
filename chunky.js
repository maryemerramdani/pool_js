function chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const subArray = [];

    for (let j = i; j < i + size && j < arr.length; j++) {
      subArray[subArray.length] = arr[j];
    }

    result[result.length] = subArray;
  }

  return result;
}