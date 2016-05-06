(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.factory('$events', Events);

	function Events() {

		return {
			TOGGLE_SIDE_BAR : 'toggleSideBar',
			TOGGLE_SEARCH 	: 'toggleSeacrh'
		};
		
	}

})(angular);