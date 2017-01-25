var app = angular.module('App');

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.ctr = {
        info: 'Welcome to test project!'
    }
      
}]);