(function () {
    'use strict';
    angular.module("siblingViewsMdl")
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                views: {
                    header: {
                        templateUrl: '/Shared/_header.html'
                    },
                    nav: {
                        templateUrl: '/Shared/_sideBar.html'
                    },
                    body: {
                        templateUrl: '/Shared/_mainContent.html'
                    },
                    footer: {
                        templateUrl: '/Shared/_footer.html'
                    }

                }

            });
    }]);
}());
