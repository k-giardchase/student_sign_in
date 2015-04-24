studentSignIn.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = StudentsFactory.students;
});
