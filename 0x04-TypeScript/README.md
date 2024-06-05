# ALX Backend JavaScript: TypeScript Tasks

This repository contains TypeScript tasks for the ALX Backend JavaScript course. Each task focuses on different aspects of TypeScript, including interfaces, classes, advanced types, and namespaces.

## Table of Contents

- [Task 0: Creating an Interface for a Student](#task-0-creating-an-interface-for-a-student)
- [Task 1: Let's Build a Teacher Interface](#task-1-lets-build-a-teacher-interface)
- [Task 2: Extending the Teacher Class](#task-2-extending-the-teacher-class)
- [Task 3: Printing Teachers](#task-3-printing-teachers)
- [Task 4: Writing a Class](#task-4-writing-a-class)
- [Task 5: Advanced Types Part 1](#task-5-advanced-types-part-1)
- [Task 6: Creating Functions Specific to Employees](#task-6-creating-functions-specific-to-employees)
- [Task 7: String Literal Types](#task-7-string-literal-types)
- [Task 8: Ambient Namespaces](#task-8-ambient-namespaces)
- [Task 9: Namespace & Declaration Merging](#task-9-namespace--declaration-merging)
- [Task 10: Update `task_4/js/main.ts`](#task-10-update-task_4jsmain.ts)
- [Task 11: Brand Convention & Nominal Typing](#task-11-brand-convention--nominal-typing)

## Task 0: Creating an Interface for a Student

**Directory:** `0x04-TypeScript/task_0`

Create an interface named `Student` with the following properties:
- `firstName` (string)
- `lastName` (string)
- `age` (number)
- `location` (string)

Render a table in Vanilla JavaScript displaying the students' first names and locations.

### Files
- `task_0/js/main.ts`
- `task_0/package.json`
- `task_0/.eslintrc.js`
- `task_0/tsconfig.json`
- `task_0/webpack.config.js`

## Task 1: Let's Build a Teacher Interface

**Directory:** `0x04-TypeScript/task_1`

Create a `Teacher` interface with the following properties:
- `firstName` (string)
- `lastName` (string)
- `fullTimeEmployee` (boolean)
- `yearsOfExperience` (number, optional)
- `location` (string)
- Additional properties allowed.

### Files
- `task_1/js/main.ts`
- `task_1/package.json`
- `task_1/tsconfig.json`
- `task_1/webpack.config.js`

## Task 2: Extending the Teacher Class

**Directory:** `0x04-TypeScript/task_1`

Extend the `Teacher` interface to create a `Directors` interface, adding the `numberOfReports` (number) property.

### Files
- `task_1/js/main.ts`

## Task 3: Printing Teachers

**Directory:** `0x04-TypeScript/task_1`

Create a function `printTeacher` that returns the first letter of the first name and the full last name.

### Files
- `task_1/js/main.ts`

## Task 4: Writing a Class

**Directory:** `0x04-TypeScript/task_1`

Create a class `StudentClass` with:
- A constructor accepting `firstName` and `lastName`
- A method `workOnHomework` returning "Currently working"
- A method `displayName` returning the `firstName`

### Files
- `task_1/js/main.ts`

## Task 5: Advanced Types Part 1

**Directory:** `0x04-TypeScript/task_2`

Create `DirectorInterface` and `TeacherInterface` with specific methods. Implement these interfaces in `Director` and `Teacher` classes. Create a function `createEmployee`.

### Files
- `task_2/js/main.ts`
- `task_2/package.json`
- `task_2/tsconfig.json`
- `task_2/webpack.config.js`

## Task 6: Creating Functions Specific to Employees

**Directory:** `0x04-TypeScript/task_2`

Create functions `isDirector` and `executeWork` that work with `Director` and `Teacher`.

### Files
- `task_2/js/main.ts`

## Task 7: String Literal Types

**Directory:** `0x04-TypeScript/task_2`

Create a `Subjects` type and a function `teachClass` that accepts `todayClass`.

### Files
- `task_2/js/main.ts`

## Task 8: Ambient Namespaces

**Directory:** `0x04-TypeScript/task_3`

Create an interface and a type, and use a third-party library with ambient declarations.

### Files
- `task_3/js/main.ts`
- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`
- `task_3/package.json`
- `task_3/tsconfig.json`
- `task_3/webpack.config.js`

## Task 9: Namespace & Declaration Merging

**Directory:** `0x04-TypeScript/task_4`

Create multiple classes and interfaces within the `Subjects` namespace.

### Files
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/Java.ts`
- `task_4/js/subjects/React.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Teacher.ts`
- `task_4/package.json`
- `task_4/tsconfig.json`

## Task 10: Update `task_4/js/main.ts`

**Directory:** `0x04-TypeScript/task_4`

Update `main.ts` to use the created classes and log results to the console.

### Files
- `task_4/js/main.ts`

## Task 11: Brand Convention & Nominal Typing

**Directory:** `0x04-TypeScript/task_5`

Create `MajorCredits` and `MinorCredits` interfaces and functions to sum credits.

### Files
- `task_5/js/main.ts`
- `task_5/package.json`
- `task_5/tsconfig.json`
- `task_5/webpack.config.js`

## Requirements

- Webpack should return no type errors.
- Every variable should use TypeScript when possible.
- Each task directory contains its own `package.json`, `tsconfig.json`, and `webpack.config.js` for configuration.

## Repository

**GitHub repository:** [alx-backend-javascript]
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


