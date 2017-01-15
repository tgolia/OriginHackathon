(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $stateProvider

            // home state
                .state('home', {
                url: '/home',
                controller: 'HomeController as homeCtrl',
                templateUrl: '/app/home/home.html'
            })
                .state('game', {
                url: '/game?id',
                controller: 'GameController as gameCtrl',
                templateUrl: '/app/game/game.html'
            })

            // Profile state
            // .state('profile', {
            //         url: '/profile',
            //         abstract: true,
            //         template: '<div ui-view></div>'
            //     })
            //     .state('profile.user', {
            //         url: '/user?id',
            //         controller: 'ProfileUserController as profileUserCtrl',
            //         templateUrl: '/app/profile/profile.user.html'
            //     })
            //     .state('profile.myProduct', {
            //         url: '/myProduct?id',
            //         controller: 'ProfileMyProductController as profileMyProductCtrl',
            //         templateUrl: '/app/profile/profile.myProduct.html'
            //     })

        });
})();
