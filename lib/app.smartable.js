/**
 * Created by alber on 16/09/2015.
 */
var APP = angular.module('appTable', [])
   .controller("DemoController", [ '$filter', '$http', '$scope', function ($filter, $http, $scope) {
      $scope.rowCollection = [
         {firstName: 'Laurent', lastName: 'Renard',  balance: 102, email: 'whatever@gmail.com'},
         {firstName: 'Blandine', lastName: 'Faivre', balance: -2323.22, email: 'oufblandou@gmail.com'},
         {firstName: 'Francoise', lastName: 'Frere', balance: 42343, email: 'raymondef@gmail.com'}
      ];
   }]);
