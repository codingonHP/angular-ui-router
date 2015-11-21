(function () {
    'use strict';

    angular.module('routerApp')
        .controller("weatherController", ["WeatherService", function (WeatherService) {
            var _this = this;
            _this.data = [];
            _this.getHourlyData = function () {
                WeatherService.getWeatherPromise('/app/services/hourly.json').then(function (resp) {
                    _this.data = resp.data;
                }, function (err) {});

                return _this.data;
            };

            _this.getFiveDaysData = function () {
                WeatherService.getWeatherPromise('/app/services/fiveDays.json').then(function (resp) {
                    _this.data = resp.data;
                }, function (err) {});

                return _this.data;
            };



        }]);

}());
