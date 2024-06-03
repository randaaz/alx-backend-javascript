/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the buffer.
 * @param {number} position - The position to set the Int8 value.
 * @param {number} value - The value to set.
 * @returns {DataView} - The DataView of the created ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
