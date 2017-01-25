var app = angular.module('App', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: '/templates/index.html',
            controller: 'MainCtrl'
        }).otherwise({
            redirectTo: '/',
            caseInsensitiveMatch: true
        })
}])
