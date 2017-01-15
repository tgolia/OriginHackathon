(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['nbaFactory', 'nflFactory', 'logoFactory', '$http', '$timeout'];

    /* @ngInject */
    function HomeController(nbaFactory, nflFactory, logoFactory, $http, $timeout) {
        var vm = this;
        vm.title = 'HomeController';

        vm.logo = [];
        vm.nbaGames = [];
        vm.nflGames = [];
        vm.callWeatherApi = callWeatherApi;
        vm.iconUrl = "";
        vm.cityWeather = [];
        vm.nflGameDetails = [];   
        vm.grabTeamDetails = grabTeamDetails;
        //vm.randomFootballScore = randomFootballScore;

        activate();

        ////////////////

        function activate() {
            // nbaFactory
            //        .getScores('2017','01','14')
            //        .then(function(response) {
            //        	vm.nbaGames = response.data;
            //        	console.log(vm.nbaGames);
            //        })
            //        .catch(function(error) {
            //            console.log('failed to load nba games');
            //        });
            nflFactory
                .getScores('2016', 'PST', '2')
                .then(function(response) {
                    vm.nflGames = response.data;
                    console.log(vm.nflGames);
                })
            logoFactory
                .teamLogo()
                .then(function(response) {
                    vm.logo = response.data;
                    console.log(response.data)
                });



        }

        function callWeatherApi(city) {
            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=115b5c71f21e60d68e84c7032f527c68')
                .then(function(response) {
                    vm.city = response.data;
                    //console.log(vm.city);
                    //console.log(city);
                    vm.iconUrl = 'http://openweathermap.org/img/w/' + vm.city.weather[0].icon + '.png';
                    vm.city.main.temp = convertTemp(vm.city.main.temp);
                    addCityWeather();

                })
                .catch(function(error) {
                    console.log('Fail.')
                });
                
        }

        function convertTemp(temp) {
            var toF = Math.round(temp * (9 / 5) - 459.67);
            return toF;
        }

        function addCityWeather() {
        	vm.cityWeather.push({
        		city: vm.city.name,
        		temp: vm.city.main.temp,
        		icon: vm.iconUrl,
        		condition: vm.city.weather[0].description
        	});
        }

        function grabTeamDetails(home, away, gameId) {
        	for (var i=0;i<vm.logo.length;i++) {
        		if (home == vm.logo[i].Key) {
        			var homeName = vm.logo[i].FullName;
        			var homeLogo = vm.logo[i].WikipediaLogoUrl;
        			var homeColor = vm.logo[i].SecondaryColor;
        		}
        		if (away == vm.logo[i].Key) {
        			var awayName = vm.logo[i].FullName;
        			var awayLogo = vm.logo[i].WikipediaLogoUrl;
        			var awayColor = vm.logo[i].SecondaryColor;
        		}
			}
			var homePoints = Math.floor((Math.random() * 40) + 3);
			var awayPoints = Math.floor((Math.random() * 40) + 3);
			// $timeout(function() {
			// 	nflFactory
			// 		.getActualScores(gameId)
			// 		.then(function(response){
			// 			console.log(response.data)
			// 			var homePoints = response.data.summary.home.points;
			// 			var awayPoints = response.data.summary.away.points;
			// 		});
			// 	}, 1001);

			vm.nflGameDetails.push({
				homeName: homeName,
        		homeLogo: homeLogo,
        		homeColor: homeColor,
        		awayName: awayName,
        		awayLogo: awayLogo,
        		awayColor: awayColor,
        		homePoints: homePoints,
        		awayPoints: awayPoints
			});
			console.log(vm.nflGameDetails);
        }

        // function randomFootballScore() {
        // 	var r = Math.floor((Math.random() * 40) + 3);
        // 	return r;
        // }
    }
})();
