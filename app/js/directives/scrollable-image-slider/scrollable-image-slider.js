(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.directive('scrollableImageSlider', ScrollableImageSlider);

	ScrollableImageSlider.$inject = [];

	function ScrollableImageSlider() {
		var _directive = {};

		_directive.restrict 		= 'AE';
		_directive.scope 			= {};
		_directive.templateUrl 		= 'js/directives/scrollable-image-slider/scrollable-image-slider.html';
		_directive.link 			= linkFn;
		_directive.controller 		= controllerFn;
		_directive.controllerAs 	= 'scrollableImageSliderCtrl';
		_directive.bindToController = true;

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$interval', '$http'];

	function controllerFn($scope, $interval, $http) {
		
		var vm = this;
		var bannersUrl = 'config/banners.json';

		vm.images 	= [];
		vm.current 	= 0;
		vm.duration = 3000;

		vm.openImageLink 	= openImageLink;
		vm.slideTo 			= slideTo;

		function openImageLink(index) {
			alert('show image details, image index : ' + index);
		}

		function slideTo(index) {
			vm.current = (index === vm.images.length ? 0 : index);
		}

		$http({
			method: 'GET',
			url: bannersUrl
		}).then(function(response) {
			vm.images = response.data.banners;

			$interval(function() {
				slideTo(++vm.current);
			}, vm.duration);
		});
	}

})(angular);