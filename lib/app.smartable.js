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
   }])
   .controller('urlController', function ($scope, $http) {
      /*this controller uses the url as a single string*/
      $http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&fname={firstName}&lname={lastName}").
         success(function (data) {
            $scope.users = data
         })
   })
   .controller('objController', function ($scope, $http) {
      /*this controller uses the config.params object as the request payload*/
      var config = {
         params: {
            'rows': 5,
            'fname': '{firstName}',
            'lname': '{lastName}',
            'tel': '{phone|format}',
            'callback': "JSON_CALLBACK"
         }
      }
      $http.jsonp("http://www.filltext.com", config, {}).success(function (data) {
         $scope.users = data
      });

   });

/*   .factory("demoDataGenerator", function (_) {
 var template = {
 "installationAt": "Philadelphia, PA",
 "adminEmail": "ksm@pobox.com",
 "poweredBy": "Cofax",
 "poweredByIcon": "/images/cofax.gif"
 };
 this.generateData = generateData;
 function generateData(number) {
 return _.range(number).map(function (n) {
 var clone = _.mapValues(template, function (val) {
 return val + Number(_.uniqueId());
 });
 _.extend(clone, {
 id: n
 });
 return clone;
 })
 return null;
 }
 })*/
