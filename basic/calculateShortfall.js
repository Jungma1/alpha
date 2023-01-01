// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let amount = 0;

  for (let i = 1; i <= count; i++) {
    amount += price * i;
  }

  return amount - money > 0 ? amount - money : 0;
}
