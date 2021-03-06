studentSignIn.controller('StatusCtrl', function StatusCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;

  $scope.signIn = function(student) {
    StudentsFactory.signIn(student);
  };

  $scope.signOut = function(student) {
    StudentsFactory.signOut(student);
  };
});
