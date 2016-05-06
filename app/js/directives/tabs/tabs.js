(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('tabs', Tabs);

	Tabs.$inject = [];

	function Tabs() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= { jsonSrc: '@' };
		_directive.templateUrl 		= 'js/directives/tabs/tabs.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'tabsCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$http'];

	function controllerFn($scope, $http) {

		var vm = this;

		vm.tabs = [];
		
		vm.handleTabClick = handleTabClick;

		function handleTabClick(row, tab) {
			alert('clicked tab ' + tab.label);
			vm.selectedRow = row;
			vm.selectedTab = tab;
		}

		$http({
			method: 'GET',
			url: vm.jsonSrc
		}).then(function(response) {
			vm.tabs = response.data.tabs;
			vm.selectedRow = vm.tabs.rows[0];
			vm.selectedTab = vm.tabs.rows[0].tabs[0];
		});

	}

})(angular);