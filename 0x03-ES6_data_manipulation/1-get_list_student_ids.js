/**
 * Returns an array of student ids from a list of student objects.
 * @param {Array<Object>} students - Array of student objects.
 *
 * @returns {Array<Number>} - Array of student ids.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
