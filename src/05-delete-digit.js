/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {
// let min = 9;
// const s = String(n);
// for (let i = 0; i < s.length; i++) {
//   if (s[i] < min) {
//     min = i;
// }
// }
// let s1 = s.slice(0, min) + s.slice(min+1);
// return s1;
// }

function deleteDigit(n) {
  let max = 0;
  let res = 0;
  const num = String(n);
  for (let i = 0; i < num.length; i++) {
    res = num.slice(0, i) + num.slice(i + 1);
    if (max < res) {
      max = +res;
    }
  }
  return max;
}

module.exports = deleteDigit;
