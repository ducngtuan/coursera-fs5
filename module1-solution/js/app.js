(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.check = function() {
      if (isEmpty($scope.lunchMenu)) {
        $scope.message = "Please enter data first";
        $scope.isValid = false;
        return;
      }

      var items = $scope.lunchMenu.split(",");
      var validItems = items.filter(function(item) { return !isEmpty(item); });
      if (validItems.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
      $scope.isValid = true;
    };
  }

  // check if a value is an empty string
  function isEmpty(value) {
    return angular.isUndefined(value) || (angular.isString(value) && value.trim() === "");
  }
})();
