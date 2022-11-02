function solution(numbers) {
  // 총합 45에서 numbers의 총합을 빼면 됨
  return 45 - numbers.reduce((a, b) => a + b, 0);
}
