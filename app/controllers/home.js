angular.module('MyApp')
  .controller('HomeCtrl', function($scope, Contact) {
    $scope.skills = {};
    $scope.calculate = function() {
      return (5 * $scope.skills.height);
    }
  });