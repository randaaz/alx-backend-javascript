/**
 * Returns an array of students who are located in a specific city.
 * @param {Array<Object>} students - Array of student objects
 * @param {String} city - The city to filter the students by.
 * @returns {Array<Object>} - Array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
