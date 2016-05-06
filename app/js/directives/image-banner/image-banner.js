(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('imageBanner', ImageBanner);

	ImageBanner.$inject = [];

	function ImageBanner() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/image-banner/image-banner.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'imageBannerCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope'];

	function controllerFn($scope) {
		
		var vm = this;

		vm.imageUrl = 'img/image-banner.png';

		vm.showImageDetails = showImageDetails;

		function showImageDetails() {
			alert('show image details');
		}
	}

})(angular);