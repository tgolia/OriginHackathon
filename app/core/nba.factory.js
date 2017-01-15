(function() {
    'use strict';

    angular
        .module('app')
        .factory('nbaFactory', nbaFactory);

    nbaFactory.$inject = ['$http'];

    /* @ngInject */
    function nbaFactory($http) {
        var service = {
            getScores: getScores
        };
        return service;

        ////////////////

        function getScores(year, month, day) {
        	return $http.get('https://api.sportradar.us/nba-t3/games/'+year+'/'+month+'/'+day+'/schedule.json?api_key=5kgmg92aaqag2dsxumpzedxw', {
        		// headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        	});
        }
    }
})();