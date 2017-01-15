(function() {
    'use strict';

    angular
        .module('app')
        .controller('GameController', GameController);

    GameController.$inject = ['nflFactory', 'logoFactory', '$http', '$stateParams', '$timeout'];

    /* @ngInject */
    function GameController(nflFactory, logoFactory, $http, $stateParams, $timeout) {
        var vm = this;
        vm.title = 'GameController';

        vm.logo = [];
        vm.teamIndex;

        activate();

        ////////////////

        function activate() {
        	logoFactory
                .teamLogo()
                .then(function(response) {
                    vm.logo = response.data;
                    console.log(response.data)
                });
                grabTeamDetails();
        } 

    	function grabTeamDetails() {
    		$timeout(function() {
		    	for (var i=0;i<vm.logo.length;i++) {
		    		if ($stateParams.id == vm.logo[i].Key) {
		    			vm.teamIndex = i;
		    			console.log(vm.teamIndex);
		    		}
				}
    		}, 500);
        }
}
})();