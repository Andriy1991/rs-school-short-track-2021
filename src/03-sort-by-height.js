/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
const arr2 = arr;
let max;
let tmp;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] !== -1) {
    max = i;
    for (let j = i; j < arr2.length; j++) {
      if (arr2[j] !== -1 && arr2[max] > arr2[j]) {
        max = j;
      } 
    }
    tmp = arr2[i];
    arr2[i] = arr2[max];
    arr2[max] = tmp;
  }
}
return arr2;
}

module.exports = sortByHeight;
