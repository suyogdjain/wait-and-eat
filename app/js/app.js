'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/landing_page.html',
    controller: 'LandingPageCtrl'
  });
  $routeProvider.when('/waitlist', {
    templateUrl: 'partials/waitlist.html',
    controller: 'WaitlistCtrl'
  });
  $routeProvider.when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'AuthCtrl'
  });
  $routeProvider.when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'AuthCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
