/**
 * Updates the value of unique items in a Map to 100.
 * @param {Map<String, number>} - The Map to update.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
