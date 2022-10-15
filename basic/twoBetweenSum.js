function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const sum = [...Array(max - min + 1).keys()].map(i => i + min).reduce((a, b) => a + b, 0);

  return sum;
}
