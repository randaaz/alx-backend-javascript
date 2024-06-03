/**
 * Checks if all elements in an array are present in a set.
 * @param {Set} set - The set to check.
 * @param {*} array - The array of values to check..
 * @returns {Boolean} - True or false
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
