/*
BAD EXAMPLE
 */
angular.module("myAppTable", [])
   .controller("interactiveExampleCtrl", ["$scope", function ($scope) {
      $scope.originalList = [{
         "id": 0,
         "age": 24,
         "name": "Mathis Hurst",
         "birthDate": "2004-11-17T00:04:56 -01:00"
      }, {
         "id": 1,
         "age": 38,
         "name": "Gallegos Ryan",
         "birthDate": "2001-08-06T11:04:54 -02:00"
      }
      ];
      $scope.tableData = $scope.originalList;
      console.log($scope.tableData);
      $scope.config = {
         itemsPerPage: 5,
         maxPages: 5,
         fillLastPage: "yes"
      };
/*
      $scope.add = function () {
         $scope.originalList.push({name: $scope.nameToAdd});
         $scope.updateFilteredList();
      }*/
/*
      $scope.updateFilteredList = function () {
         $scope.filteredList = $filter("filter")($scope.originalList, $scope.query);
      };*/
   }]);