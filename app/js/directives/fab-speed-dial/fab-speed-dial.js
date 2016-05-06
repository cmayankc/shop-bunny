(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('sbFabSpeedDial', SBFabSpeedDial);

	SBFabSpeedDial.$inject = [];

	function SBFabSpeedDial() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= { direction: '@' };
		_directive.templateUrl 		= 'js/directives/fab-speed-dial/fab-speed-dial.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'fabCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope'];

	function controllerFn($scope) {
		var vm = this;

		vm.handleFABAction = handleFABAction;

		function handleFABAction(type) {
			alert('You clicked ' + type);
		}
	}

})(angular);