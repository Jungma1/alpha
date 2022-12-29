// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  const damage = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;

    // 10의 약수는 1, 2, 5, 10 으로 10/2 = 5 이상으로는 약수가 될 수 없음 (최적화)
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) count++;
    }

    // 10의 약수 10이 빠져있으므로 +1
    damage.push(count + 1);
  }

  return damage.map(d => (d > limit ? power : d)).reduce((a, b) => a + b, 0);
}
