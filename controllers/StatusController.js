studentSignIn.controller('StatusCtrl', function StatusCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;

  $scope.signIn = function(item) {
    StudentsFactory.signIn(item);
  };

  $scope.signOut = function(item) {
    StudentsFactory.signOut(item);
  };
});
