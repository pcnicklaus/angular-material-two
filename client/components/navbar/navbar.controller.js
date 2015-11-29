'use strict';

angular.module('materialDesignTwoApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    $scope.isCollapsed = true;
  });
