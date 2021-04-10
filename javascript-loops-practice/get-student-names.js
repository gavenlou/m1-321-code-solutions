/* exported getStudentNames */

function getStudentNames(students) {
  for (var i = 0, result = []; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}
