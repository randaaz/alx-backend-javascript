/**
 * Class representing a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Create a course.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - The duration of the course in weeks.
   * @param {String[]} students - The list of students enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get the name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Set the length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}