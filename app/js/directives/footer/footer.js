(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('sbFooter', Footer);

	Footer.$inject = [];

	function Footer() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/footer/footer.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'footerCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$rootScope'];

	function controllerFn($rootScope) {
		var vm = this;

		vm.checkout = checkout;

		function checkout(type) {
			alert('checkout clicked');
		}
	}

})(angular);