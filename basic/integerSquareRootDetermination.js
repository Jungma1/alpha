function solution(n) {
  for (let a = 1; a <= n; a++) {
    if (a * a === n) return (a + 1) ** 2;
  }
  return -1;
}
