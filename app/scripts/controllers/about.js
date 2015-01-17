'use strict';

/**
 * @ngdoc function
 * @name barMobileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the barMobileApp
 */
angular.module('barMobileApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
