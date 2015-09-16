app = angular.module("plunker", ["colorpicker.module", "chartjs.directive"])
"use strict"

###
@name - FormItem
@comment - This creates a form control group.
@usage <formitem title="Label:" type="text">[Contents]</box>
###
app.directive "formitem", ->
  restrict: "E"
  replace: true
  transclude: true
  scope:
    title: "@"
    name: "@"
    help: "@"
    placeholder: "@"

  link: postLink = (scope, element, attrs) ->
    element.find('input').addClass('input-medium')
    console.log element
  template: '''
    <div class="control-group">
      <div class="control-label">
        <label for="{{name}}" id="{{name | lowercase}}">{{title}}</label>
      </div>
      <div class="controls" ng-transclude></div>
      <span class="inline-help">{{help}}</span>
    </div>
  '''

app.controller "MainCtrl", ($scope, $rootScope) ->
  $scope.defaults =

#Bar defaults
    bar:
      labels: ["January", "February", "March", "April", "May", "June", "July"]
      datasets: [
        fillColor: "rgba(220,220,220,0.5)"
        strokeColor: "rgba(220,220,220,1)"
        pointColor: "rgba(220,220,220,1)"
        pointStrokeColor: "#fff"
        data: [65, 59, 90, 81, 56, 55, 40]
      ,
        fillColor: "rgba(151,187,205,0.5)"
        strokeColor: "rgba(151,187,205,1)"
        pointColor: "rgba(151,187,205,1)"
        pointStrokeColor: "#fff"
        data: [28, 48, 40, 19, 96, 27, 100]
      ]

    line: {}
    pie: {}
    radar:
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Partying", "Running"]
      datasets: [
        fillColor: "rgba(220,220,220,0.5)"
        strokeColor: "rgba(220,220,220,1)"
        pointColor: "rgba(220,220,220,1)"
        pointStrokeColor: "#fff"
        data: [65, 59, 90, 81, 56, 55, 40]
      ,
        fillColor: "rgba(151,187,205,0.5)"
        strokeColor: "rgba(151,187,205,1)"
        pointColor: "rgba(151,187,205,1)"
        pointStrokeColor: "#fff"
        data: [28, 48, 40, 19, 96, 27, 100]
      ]

    doughnut: {}


  #Chart options
  $scope.chart =
    title: "Chart"
    type: "Bar"
    height: 250
    width: 600
    options:
      chart:
        events:
          selection: (e) ->
            console.log e

    data: null

  $scope.chart.data = $scope.defaults[String($scope.chart.type).toLowerCase()]
  options = {}
  $scope.Chartjs = addItem: (o) ->
    $scope.$apply ->
      $scope.chart.data.datasets[0].data.push obj



  #window.c = $scope.Chartjs;
  angular.element(document).ready ->
    angular.element("legend").bind "click", ->
      angular.element(this).next().slideToggle()
