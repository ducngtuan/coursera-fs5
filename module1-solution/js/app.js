(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.check = function() {
      if ($scope.lunchMenu === "" || angular.isUndefined($scope.lunchMenu)) {
        $scope.message = "Please enter data first";
        return;
      }

      var items = $scope.lunchMenu.split(",");
      if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
