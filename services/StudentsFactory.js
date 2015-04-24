studentSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Kyle", present: false },
    { name: "Maggie", present: false },
    { name: "Erik", present: false },
    { name: "Bryant", present: false },
    { name: "Gillian", present: false }
  ]
  return factory;
});
