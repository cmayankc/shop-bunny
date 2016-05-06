(function(ng) {

	'use strict';

	ng.module('shop-bunny', ['ngMaterial', 'ui.router'])

	.controller('AppController', AppController);

	AppController.$inject = ['$scope', '$events', 'Search'];

	function AppController($scope, $events, Search) {

		var vm = this;

		$scope.searchOptions = {
			query 		: null,
			showSearch 	: true,
			searching 	: false
		};

		vm.search = search;

		function search() {

			$scope.searchOptions.searching = true;
			
			Search.find($scope.searchOptions.query)
			.then(function(results) {
				$scope.searchOptions.searching = false;
				$scope.searchOptions.query = null;
				alert(results);
			});
		}

		function toggleSearch() {
			$scope.searchOptions.showSearch = !$scope.searchOptions.showSearch;
		}

		$scope.$watch('searchOptions.query', function(nv, ov) {
			if(!nv) {
				return;
			}

			search();
		});

		$scope.$on($events.TOGGLE_SEARCH, toggleSearch);
	}

	function bootstrapApp() {
        ng.element(document).ready(function() {
            ng.bootstrap(document, ['shop-bunny']);
        });
    }

    bootstrapApp();

})(angular);