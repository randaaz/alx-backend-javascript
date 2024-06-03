/**
 * Returns a string of concatenated substrings from a set of strings
 * that start with a given prefix.
 * @param {Set<String>} set - The set of strings to clean.
 * @param {String} startString - The prefix to filter the strings by.
 * @returns {String} - A string of concatenated substrings separated.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
