(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('horizontalMenu', HorizontalMenu);

	HorizontalMenu.$inject = [];

	function HorizontalMenu() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/horizontal-menu/horizontal-menu.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'horizontalMenuCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs, ctrl) {
		
		var MARGIN_PER_CLICK = 80;
		var ele = $element;

		ctrl.currentMargin 	= 0;
		ctrl.disabledNav 	= 'left';

		ctrl.moveLeft 			= moveLeft;
		ctrl.moveRight 			= moveRight;
		ctrl.setCurrentStyle 	= setCurrentStyle;

		function moveRight() {
			var subMenuWidth = ele.find('.menu-items').width();
			var avlblWidth = MARGIN_PER_CLICK*ctrl.menuItems.length-subMenuWidth;
			if(Math.abs(ctrl.currentMargin) < avlblWidth) {
				ctrl.currentMargin -= MARGIN_PER_CLICK;
				setCurrentStyle();
				ctrl.disabledNav = Math.abs(ctrl.currentMargin) > avlblWidth ? 'right' : 'none';
			} else {
				ctrl.disabledNav = 'right';
			}
		}

		function moveLeft() {
			if(ctrl.currentMargin < 0) {
				ctrl.currentMargin += MARGIN_PER_CLICK;
				setCurrentStyle();
				ctrl.disabledNav = ctrl.currentMargin === 0 ? 'left' : 'none';
			} else {
				ctrl.disabledNav = 'left';
			}
		}

		function setCurrentStyle() {
			ctrl.currentStyle 	= {
				'margin-left': ctrl.currentMargin+'px'
			};
		}
	}

	controllerFn.$inject = ['$scope', '$http'];

	function controllerFn($scope, $http) {
		
		var vm = this;
		
		vm.subMenuJson 		= 'config/submenu.json'
		vm.menuItems 		= [];
		vm.selectedIndex 	= 0;
		
		vm.handleMenuClick 	= handleMenuClick;

		function handleMenuClick(index) {
			if(vm.selectedIndex === index) {
				return;
			}

			vm.selectedIndex = index;

			alert('You clicked ' + vm.menuItems[index].link);
		}

		$http({
			method: 'GET',
			url: vm.subMenuJson
		}).then(function(response) {
			vm.menuItems = response.data.menuItems;

			vm.setCurrentStyle();
		});
	}

})(angular);