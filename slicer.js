function slice(input, start, end) {
  const len = input.length;

  start = start < 0 ? len + start : start ?? 0;
  end = end === undefined ? len : (end < 0 ? len + end : end);

  start = Math.max(0, start);
  end = Math.min(len, end);

  if (end <= start) return Array.isArray(input) ? [] : "";

  let result = Array.isArray(input) ? [] : "";

  for (let i = start; i < end; i++) {
    if (Array.isArray(input)) {
      result.push(input[i]);
    } else {
      result += input[i];
    }
  }

  return result;
}