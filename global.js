(function () {
    'use strict';
    angular.module("routerApp")
        .config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                    url: '/home',
                    templateUrl: '/templates/Weather-hourly.html'
                })
                .state('rangeForecast', {
                    url: '/rangeForecast',
                    templateUrl: '/templates/weather-fivedays.html'
                });
    }]);
}());
