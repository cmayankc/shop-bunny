(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('sbSidebar', Sidebar);

	Sidebar.$inject = [];

	function Sidebar() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/sidebar/sidebar.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'sidebarCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$events', '$mdSidenav', '$state'];

	function controllerFn($scope, $events, $mdSidenav, $state) {

		var vm = this;

		vm.handleMenuNavigation = handleMenuNavigation;

		$scope.$on($events.TOGGLE_SIDE_BAR, toggleSideBar);

		function toggleSideBar() {
			$mdSidenav('left').toggle();
		}

		function handleMenuNavigation(menuId) {

			$mdSidenav('left').toggle();
			
			switch(menuId) {
				case 'wallet': 
					alert('show My Wallet');
					break;
				case 'transactions': 
					alert('show My transactions');
					break;
				case 'balance': 
					alert('show My balance');
					break;
				case 'cards': 
					alert('show My cards');
					break;
				case 'giftcards': 
					alert('show My giftcards');
					break;
				case 'loyalty': 
					alert('show My loyalty');
					break;
				case 'offers': 
					alert('show My offers');
					break;
				case 'orders': 
					alert('show My orders');
					break;
				case 'settings': 
					alert('show My settings');
					break;
				case 'logout': 
					alert('log me out');
					break;
				case 'imageBanner': 
					$state.go('imageBanner', { component: 'imageBanner' });
					break;
				case 'textBanner': 
					$state.go('textBanner', { component: 'textBanner' });
					break;
				case 'imageSlider': 
					$state.go('imageSlider', { component: 'imageSlider' });
					break;
				case 'fabSpeedDial':
					$state.go('fabSpeedDial', { component: 'fabSpeedDial' });
					break;
				case 'dialog': 
					$state.go('dialog', { component: 'dialog' });
					break;
				case 'adsPanel': 
					$state.go('adsPanel', { component: 'adsPanel' });
					break;
				case 'productComp': 
					$state.go('productComp', { component: 'productComp' });
					break;
				case 'horizontalMenu':
					$state.go('horizontalMenu', { component: 'horizontalMenu' });
					break;
				case 'productsList':
					$state.go('productsList', { component: 'productsList' });
					break;
				case 'tabs':
					$state.go('tabs', { component: 'tabs' });
					break;
			}
		}

	}

})(angular);