(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('textBanner', textBanner);

	textBanner.$inject = [];

	function textBanner() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/text-banner/text-banner.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'textBannerCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope'];

	function controllerFn($scope) {
		
		var vm = this;

		vm.offerText = 'Offer of the week :: Buy Note 5 and get screen guard FREE';

		vm.takeMeToOffer = takeMeToOffer;

		function takeMeToOffer() {
			alert('show offer details');
		}
	}

})(angular);