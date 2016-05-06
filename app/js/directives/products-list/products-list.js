(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('productsList', ProductsList);

	ProductsList.$inject = [];

	function ProductsList() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/products-list/products-list.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'productsListCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$http'];

	function controllerFn($scope, $http) {
		var vm = this;
		var productsUrl = 'config/products.json';

		$http({
			method: 'GET',
			url: productsUrl
		}).then(function(response) {
			vm.products = response.data.products;
		});
	}

})(angular);