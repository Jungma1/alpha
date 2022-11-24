function solution(s) {
  return s
    .split(' ')
    .map(a =>
      a
        .split('')
        .map((b, index) => (index % 2 === 0 ? b.toUpperCase() : b.toLowerCase()))
        .join('')
    )
    .join(' ');
}
