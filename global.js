(function () {
    'use strict';
    angular.module("routerApp")
        .config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: '/templates/home.html'
            });
    }]);
}());
