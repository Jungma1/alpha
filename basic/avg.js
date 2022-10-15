function solution(arr) {
  return arr.reduce((value, currentValue) => value + currentValue, 0) / arr.length;
}
