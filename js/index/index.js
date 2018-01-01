/// <reference path="../../node_modules/_angular@1.6.7@angular/angular.min.js" />
(function (angular) {
    var myApp = angular.module('myApp', []);
    myApp.controller('index', ['$scope', function ($scope) {
        $scope.logoFor = false;
        $scope.ohterSignin = function () {
            if ($scope.logoFor) {
                $scope.logoFor = false;
            }
            else {
                $scope.logoFor = true;
            }
            
        }
    }])
})(angular)