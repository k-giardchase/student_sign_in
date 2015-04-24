var studentSignIn = angular.module('studentSignIn', ['ui.router']);

  studentSignIn.config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '',
      templateUrl: 'partials/home.html'
    });

    $stateProvider.state('sign_in', {
      url: '/sign_in',
      templateUrl: 'partials/sign_in.html',
      controller: 'StatusCtrl'
    });

    $stateProvider.state('whos_here', {
      url: '/whos_here',
      templateUrl: 'partials/whos_here.html',
      controller: 'StudentsCtrl'
    });

  });
