/**
 * WeakMap to track the number of calls to each API endpoint.
 */
export const weakMap = new WeakMap();

/**
 * Maximum number of allowed calls to an API endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Function to query an API endpoint.
 * @param {string} endpoint - The API endpoint to query.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
