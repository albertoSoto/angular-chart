/**
 * Created by alber on 16/09/2015.
 */
var myApp = angular.module('myAppTable', ['underscore', 'ngTable']);
(function() {
   myApp.factory('_', ['$window', function ($window) {
      return $window._; // assumes underscore has already been loaded on the page
   }]);
   myApp.factory("demoDataGenerator", function () {
      var template = {
         "installationAt": "Philadelphia, PA",
         "adminEmail": "ksm@pobox.com",
         "poweredBy": "Cofax",
         "poweredByIcon": "/images/cofax.gif"
      };
      this.generateData = generateData;
      function generateData(number) {
         return template;
         /*return _.range(number).map(function (n) {
          var clone = _.mapValues(template, function (val) {
          return val + Number(_.uniqueId());
          });
          _.extend(clone, {
          id: n
          });
          return clone;
          })*/
      }
   });
   myApp.controller("demoController", [ "ngTable","$scope", function ($scope) {//"demoDataGenerator",
      // tip: to debug, open chrome dev tools and uncomment the following line
      //debugger;
      //var data = demoDataGenerator.generateData(100);
      //this.cols = demoDataGenerator.generateColumns(data[0]);
      this.tableParams = new NgTableParams({
         page: 1, // show first page
         count: 10 // count per page
      }, {
         filterDelay: 0,
         data: [{
            "installationAt": "Philadelphia, PA",
            "adminEmail": "ksm@pobox.com",
            "poweredBy": "Cofax",
            "poweredByIcon": "/images/cofax.gif"
         }]
      });
   }]);
});

