(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('adsPanel', AdsPanel);

	AdsPanel.$inject = [];

	function AdsPanel() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= { jsonSrc: '@' };
		_directive.templateUrl 		= 'js/directives/ads-panel/ads-panel.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'adsCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$http'];

	function controllerFn($scope, $http) {

		var vm = this;

		vm.ads = [];

		vm.viewAll 	= viewAll;
		vm.showDeal = showDeal;

		function viewAll() {
			alert('view all clicked');
		}

		function showDeal(index) {
			alert('show deal with id ' + vm.ads[index].id);
		}

		$http({
			method: 'GET',
			url: vm.jsonSrc
		}).then(function(response) {
			vm.ads = response.data.ads;
		});

	}

})(angular);