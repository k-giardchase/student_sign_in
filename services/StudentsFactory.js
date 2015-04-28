studentSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Kyle", present: false },
    { name: "Maggie", present: false },
    { name: "Erik", present: false },
    { name: "Bryant", present: false },
    { name: "Gillian", present: false }
  ];

  factory.addStudent = function(newName) {
   this.students.push({name: newName, present: false });
  };

  factory.deleteStudent = function(student) {
   var index = this.students.indexOf(student);
   this.students.splice(index, 1);
  };

  factory.signIn = function(student) {
    student.present = true;
  };

  factory.signOut = function(student) {
    student.present = false;
  };

  return factory;
});
