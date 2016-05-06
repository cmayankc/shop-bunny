(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('sbHeader', Header);

	Header.$inject = [];

	function Header() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/header/header.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'headerCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$rootScope', '$events'];

	function controllerFn($rootScope, $events) {
		var vm = this;

		vm.toggleList 			= toggleList;
		vm.toggleSearch 		= toggleSearch;
		vm.showCart 			= showCart
		vm.showNotifications 	= showNotifications;
		vm.showLocation 		= showLocation;

		function toggleList() {
			$rootScope.$broadcast($events.TOGGLE_SIDE_BAR, null);
		}

		function toggleSearch() {
			$rootScope.$broadcast($events.TOGGLE_SEARCH, null);
		}

		function showCart() {
			alert('show cart');	
		}

		function showNotifications() {
			alert('show notifications');
		}

		function showLocation() {
			alert('show location');
		}
	}

})(angular);