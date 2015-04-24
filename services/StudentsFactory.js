studentSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Kyle", present: false },
    { name: "Maggie", present: false },
    { name: "Erik", present: false },
    { name: "Bryant", present: false },
    { name: "Gillian", present: false }
  ]

  factory.signIn = function(student) {
    student.present = true;
  };

  factory.signOut = function(student) {
    student.present = false;
  };

  return factory;
});
