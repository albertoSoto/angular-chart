angular.module('myApp', ['ui.bootstrap','ui.grid','chartjs-directive'])
   .controller('myController', function ($scope) {
      //$scope.data = {
      //   name: "January, February, March, April, May, June, July",
      //   fields: {
      //      F1: {
      //         value: "1,2,3,4,5,6,7"
      //      },
      //      F2: {
      //         value: "2F"
      //      }
      //   }
      //};
      //console.log($parse('data.name'));
      $scope.updateData = function () {
         var chart = document.getElementById("myCoolChart").getAttribute("type");
         switch (chart) {
            case 'PolarArea':
            case 'Pie':
            case 'Doughnut':
               $scope.generatePieData();
               break;
            default:
               $scope.generateData();
         }
      };

      $scope.generateData = function () {
         var sevenRandNumbers = function () {
            var numberArray = [];
            for (var i = 0; i < 7; i++) {
               numberArray.push(Math.floor((Math.random() * 100) + 1));
            }
            return numberArray;
         };
         var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
               {
                  fillColor: "rgba(220,220,220,0.5)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  data: sevenRandNumbers()
               },
               {
                  fillColor: "rgba(151,187,205,0.5)",
                  strokeColor: "rgba(151,187,205,1)",
                  pointColor: "rgba(151,187,205,1)",
                  pointStrokeColor: "#fff",
                  data: sevenRandNumbers()
               }
            ]
         };
         $scope.myChart = {"data": data, "options": {}};
      };

      $scope.generatePieData = function () {
         var data = [
            {
               value: Math.floor((Math.random() * 100) + 1),
               color: "#F38630"
            },
            {
               value: Math.floor((Math.random() * 100) + 1),
               color: "#E0E4CC"
            },
            {
               value: Math.floor((Math.random() * 100) + 1),
               color: "#69D2E7"
            }
         ]
         $scope.myChart = {"data": data, "options": {}};
      };
      $scope.setCharType = function (type) {
         document.getElementById('myCoolChart').setAttribute('type', type);
      };
      $scope.line = function () {
         $scope.setCharType('Line');
         $scope.updateData();
      };
      $scope.bar = function () {
         $scope.setCharType('Bar');
         $scope.updateData();
      };
      $scope.radar = function () {
         $scope.setCharType('Radar');
         $scope.updateData();
      };
      $scope.polarArea = function () {
         $scope.setCharType('PolarArea');
         $scope.updateData();
      };
      $scope.pie = function () {
         $scope.setCharType('Pie');
         $scope.updateData();
      };
      $scope.doughnut = function () {
         $scope.setCharType('Doughnut');
         $scope.updateData();
      };
     // $scope.generateData();
   });
