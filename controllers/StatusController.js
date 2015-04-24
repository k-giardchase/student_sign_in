studentSignIn.controller('StatusCtrl', function StatusCtrl() {
  $scope.students = StudentsFactory.students;

  $scope.signIn = function(student) {
    StudentsFactory.signIn(student);
  };

  $scope.signOut = function(student) {
    Students.Factory.signOut(student);
  };
});
