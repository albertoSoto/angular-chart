/**
 * Created by alber on 16/09/2015.
 */
var APP = angular.module('appTable', ['underscore', 'ngTable'])
   .factory("demoDataGenerator", function (_) {
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
   })
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

   })
   .controller("DemoController", ["NgTableParams", '$filter', '$http', '$scope', function (NgTableParams, $filter, $http, $scope) {
      /*var self = this;
      var data = [{name: "Moroni", age: 50}];
      self.tableParams = new NgTableParams({
         page: 1, // show first page
         count: 10
      }, {data: data});
      */
      $http.jsonp('http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true&callback=JSON_CALLBACK').
         success(function (data) {
            $scope.tableParams = new NgTableParams({
               page: 1,            // show first page
               total: data.length, // length of data
               count: 10           // count per page
            });
            $scope.$watch('tableParams', function (params) {
               var orderedData = params.sorting ?
                  $filter('orderBy')(data, params.orderBy()) :
                  data;
               $scope.users = orderedData.slice((params.page - 1) * params.count, params.page * params.count);
            }, true);
         });
   }]);

