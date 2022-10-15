function solution(n) {
  const divisor = [];

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) {
      divisor.push(index);
    }
  }

  return divisor.reduce((a, b) => a + b, 0);
}

function solution(n) {
  let divisorSum = 0;

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) divisorSum += index;
  }

  return divisorSum;
}
