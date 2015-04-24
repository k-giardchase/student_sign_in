var studentSignIn = angular.module('studentSignIn', ['ui.router']);

  studentSignIn.config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '',
      templateUrl: 'partials/home.html'
    });
  });
