studentSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;

    $scope.addStudent = function() {
      var name = $scope.studentName;
      StudentsFactory.addStudent(name);
      $scope.studentName = null;
    };

    $scope.deleteStudent = function() {
      var name = $scope.studentName;
      StudentsFactory.deleteStudent(name);
    };
    
});
