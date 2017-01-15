(function() {
    'use strict';

    angular
        .module('app')
        .controller('GameController', GameController);

    GameController.$inject = ['nflFactory', 'logoFactory', '$http', '$stateParams'];

    /* @ngInject */
    function GameController(nflFactory, logoFactory, $http, $stateParams) {
        var vm = this;
        vm.title = 'GameController';

        vm.game = [];

        activate();

        ////////////////

        function activate() {
        	nflFactory
        		.getActualScores($stateParams.id)
        		.then(function(response) {
        			vm.game = response.data;
        			console.log(vm.game);
        		})
        }
    }
})();