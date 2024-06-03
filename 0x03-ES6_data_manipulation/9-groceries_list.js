/**
 * Returns a Map representing a list of groceries with
 * their quantities.
 * @returns {Map<string, Number>} - A Map of grocery items.
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
