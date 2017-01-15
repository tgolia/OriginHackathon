(function() {
    'use strict';

    angular
        .module('app')
        .factory('nflFactory', nflFactory);

    nflFactory.$inject = ['$http'];

    /* @ngInject */
    function nflFactory($http) {
        var service = {
            getScores: getScores,
            getActualScores: getActualScores
        };
        return service;

        ////////////////

        function getScores(year, type, week) {
        	return $http.get('https://api.sportradar.us/nfl-t1/'+ year +'/' +type  +'/' + week +'/schedule.json?api_key=p7zkfvwmy8dfabgc5d9jj3zc'
        		//, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'} }
        		);
        }

        function getActualScores(gameId){
        	return $http.get('https://api.sportradar.us/nfl-ot1/games/'+gameId+'/boxscore.json?api_key=p7zkfvwmy8dfabgc5d9jj3zc', {
        		headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        	});
        }
    }
})();