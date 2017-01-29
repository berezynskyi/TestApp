var app = angular.module('App');

app.controller('TestCtrl', function($scope) {
    $scope.ctr = {
        visible: false,
        toggleVisible: toggleVisible
    }

    ////////

    function toggleVisible() {
    	$scope.ctr.visible = !$scope.ctr.visible;
    }
      
});