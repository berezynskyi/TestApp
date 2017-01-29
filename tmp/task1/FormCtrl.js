var app = angular.module('App');

app.controller('FormCtrl', function($scope) {
    $scope.ctr = {
        name: '',
        logName: logName
    }

    ////////

    function logName() {
    	console.log('name: ', $scope.ctr.name)
    }
      
});