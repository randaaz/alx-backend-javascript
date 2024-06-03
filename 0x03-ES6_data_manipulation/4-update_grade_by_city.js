/**
 * Updates the grades of students in a specific city.
 * @param {Array<Object>} students - Array of student objects.
 * @param {String} city - The city to filter the students by.
 * @param {Array<Object>} newGrades - Array of objects containing
 * studentId and grade.
 * @returns {Array<Object>} - Array of students in the specified
 * city with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
