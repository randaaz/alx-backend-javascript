import ClassRoom from './0-classroom';

/**
 * Initialize an array of classrooms with predefined sizes.
 * @returns An array of ClassRoom instances with sizes 19, 20, and 34.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
