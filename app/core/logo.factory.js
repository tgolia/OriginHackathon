(function() {
    'use strict';

    angular
        .module('app')
        .factory('logoFactory', logoFactory);

    logoFactory.$inject = ['$http'];

    /* @ngInject */
    function logoFactory($http) {
        var service = {
            teamLogo: teamLogo
        };
        return service;

        ////////////////


        function teamLogo() {
            return $http
                .get('https://api.fantasydata.net/v3/nfl/scores/JSON/Teams', {
                        headers: {
                            'Ocp-Apim-Subscription-Key': 'fefc954ad6174cfdb6d74877ad0d5382',
                            'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        });
                

        }
    }
})();