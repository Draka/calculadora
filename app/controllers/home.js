angular.module('MyApp')
  .controller('HomeCtrl', function($scope, Contact) {
    $scope.skills = {};
    $scope.calculate = function() {
      var tmb = 0;
      if ($scope.skills.gender === 'm') {
        tmb = (10 * $scope.skills.weight) + (6.25 * $scope.skills.height) - (5 * $scope.skills.age) - 161;
      } else{
        tmb = (10 * $scope.skills.weight) + (6.25 * $scope.skills.height) - (5 * $scope.skills.age) + 5;
      }
      return tmb * parseFloat($scope.skills.activity);
    };
  });