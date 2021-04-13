/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let new_s1 = s1;
  let new_s2 = s2;
  if (s1.length >= s2.length) {
    for (let i = 0; i < new_s2.length; i++) {
      new_s1 = new_s1.replace(new_s2[i], '');
    }
    return s1.length - new_s1.length;
  }
  for (let i = 0; i < new_s1.length; i++) {
    new_s2 = new_s2.replace(new_s1[i], '');
  }
  return s2.length - new_s2.length;
}

module.exports = getCommonCharacterCount;
