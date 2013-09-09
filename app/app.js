(function (angular) {

	'use strict';

	angular
		.module('ngMobileStarter', ['ngRoute','ek.mobileFrame'])

		.config([
			'$routeProvider',
			'$mobileFrameProvider',
			function ($routeProvider, $mobileFrameProvider) {

				$routeProvider
					.when('/', {
						templateUrl: 'app/views/index.tmpl.html'
					})
					.when('/about/', {
						templateUrl: 'app/views/about.tmpl.html'
					})
					.when('/search/:search', {
						templateUrl: 'app/views/search-result.tmpl.html',
						controller: 'SearchResultCtrl'
					})
					.otherwise({
						redirectTo: '/'
					});

					$mobileFrameProvider
						.setHeaderHeight(50)
						.setFooterHeight(30)
						.setNavWidth(200);

			}
		])

		.controller('SearchFormCtrl', ['$scope', '$location', function ($scope, $location) {
			$scope.onSearch = function () {
				$location.url('/search/' + $scope.search);
			};
		}])

		.controller('SearchResultCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
			$scope.term = $routeParams.search;

			$scope.results = [{
				title: 'Lorem ipsum ',
				description: 'Short loin short ribs corned beef ball …'
			}, {
				title: 'Lorem ipsum',
				description: 'Short loin short ribs corned beef ball …'
			}, {
				title: 'Lorem ipsum',
				description: 'Short loin short ribs corned beef ball …'
			}, {
				title: 'Lorem ipsum',
				description: 'Short loin short ribs corned beef ball …'
			}];
		}])

		.directive('blurOnSubmit', function () {
			return {
				restrict: 'A',
				link: function ($scope, $elem) {
					$elem.bind('keyup', function (evnt) {
						if ( evnt.keyCode !== 13 ) {
							return;
						}
						this.blur();
					});
				}
			};
		});

})(angular);