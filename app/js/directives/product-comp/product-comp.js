(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('productComp', ProductComponent);

	ProductComponent.$inject = [];

	function ProductComponent() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= { 'details': '=' };
		_directive.templateUrl 		= 'js/directives/product-comp/product-comp.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'productCompCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$dialog'];

	function controllerFn($scope, $dialog) {
		
		var vm = this;

		vm.showProductDetails 	= showProductDetails;
		vm.chooseColor 			= chooseColor;
		vm.chooseSize 			= chooseSize;

		function showProductDetails() {
			
			$dialog.show({
				controller: controllerFn,
				templateUrl: 'js/directives/product-details/product-details.html',
				parent: document.body,
				clickOutsideToClose: true,
				useFullScreen: false,
				type: 'advanced'
			});
		}

		function chooseColor(color) {
			alert('You chose color ' + color);
		}

		function chooseSize(size) {
			alert('You chose size ' + size);
		}
	}

})(angular);