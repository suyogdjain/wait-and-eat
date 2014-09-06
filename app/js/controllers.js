'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageCtrl', [function() {

  }])
  .controller('WaitlistCtrl', ['$scope', 'authService', 'partyService', 'textMessageService', function($scope, authService, partyService, textMessageService) {
    // bind users parties to $scope.parties
    authService.getCurrentUser().then(function(user) {
      if (user) {
        $scope.parties = partyService.getPartiesByUserId(user.id);
      }
    });

    // $scope.newParty stores data from form
    $scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};

    // $scope.saveParty saves party to waitlist
    $scope.saveParty = function() {
      partyService.saveParty($scope.newParty, $scope.currentUser.id);
      $scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};
    };

    // send text message to party
    $scope.sendTextMessage = function(party) {
      textMessageService.sendTextMessage(party, $scope.currentUser.id);
    };
  }])
  .controller('AuthCtrl', ['$scope', 'authService', function($scope, authService) {

    // bound to input on register and login pages
    $scope.user = {email: '', password: ''};

    // new user method using authService
    $scope.register = function() {
      authService.register($scope.user);
    };

    // login user method using authService
    $scope.login = function() {
      authService.login($scope.user);
    };

    // logout user method using authService
    $scope.logout = function() {
      authService.logout();
    };
  }]);
