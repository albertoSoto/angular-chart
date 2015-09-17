/**
 * Created by alber on 16/09/2015.
 */
var APP = angular.module('appTable', [])
   .controller("DemoController", ['$filter', '$http', '$scope', function ($filter, $http, $scope) {
      var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
      var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
      var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
      var id = 1;

      function generateRandomItem(id) {
         var firstname = firstnames[Math.floor(Math.random() * 3)];
         var lastname = lastnames[Math.floor(Math.random() * 3)];
         var birthdate = dates[Math.floor(Math.random() * 3)];
         var balance = Math.floor(Math.random() * 2000);
         return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: new Date(birthdate),
            balance: balance
         }
      }
      $scope.rowCollection = [];
      for (id; id < 5; id++) {
         $scope.rowCollection.push(generateRandomItem(id));
      }
      $scope.newData = {
         firstName: "Foo",
         lastName: "Bar",
         balance: 0,
         email: "a@a.es"
      };

      //add to the real data holder
      $scope.addRandomItem = function addRandomItem() {
         $scope.rowCollection.push(generateRandomItem(id));
         id++;
      };

      //remove to the real data holder
      $scope.removeItem = function removeItem(row) {
         var index = $scope.rowCollection.indexOf(row);
         if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
         }
      }

   }]);
