(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.service('Search', Search);

	Search.$inject = ['$q', '$timeout'];

	function Search($q, $timeout) {

		var vm = this;

		vm.find = find;

		function find(query) {
			
			var deferred = $q.defer();

			// temp code to show that the service returns something after 1000ms, should be replaced by an actual service call
			$timeout(function() {
				deferred.resolve(['temp item 1', 'temp item 2']);
			}, 1000);

			return deferred.promise;
		}

	}

})(angular);