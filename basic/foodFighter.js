// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  const result = food.map(f => Math.floor(f / 2)).map((f, i) => `${i}`.repeat(f));
  return `${result.join('')}0${result.reverse().join('')}`;
}
