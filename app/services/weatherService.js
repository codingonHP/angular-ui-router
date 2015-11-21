(function () {
    'use strict';

    angular.module('routerApp')
        .service('WeatherService', ['$http', function ($http) {
            this.getWeatherPromise = function (url) {
                return $http({
                    method: 'GET',
                    url: url,
                    responseType: 'json'
                });
            }

    }]);
}());
