(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: "js/states/home/home.html",
			controller:'HomeController',
			controllerAs: 'homeCtrl'
		})

		.state('imageBanner', {
			url: '/imageBanner',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'imageBanner'
      		}
		})

		.state('textBanner', {
			url: '/textBanner',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'textBanner'
      		}
		})

		.state('imageSlider', {
			url: '/imageSlider',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'imageSlider'
      		}
		})

		.state('dialog', {
			url: '/dialog',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'dialog'
      		}
		})

		.state('fabSpeedDial', {
			url: '/fabSpeedDial',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'fabSpeedDial'
      		}
		})

		.state('adsPanel', {
			url: '/adsPanel',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'adsPanel'
      		}
		})

		.state('productComp', {
			url: '/productComp',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'productComp'
      		}
		})

		.state('horizontalMenu', {
			url: '/horizontalMenu',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'horizontalMenu'
      		}
		})

		.state('productsList', {
			url: '/productsList',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'productsList'
      		}
		})

		.state('tabs', {
			url: '/tabs',
			templateUrl: "js/states/demo/demo.html",
			controller:'DemoController',
			controllerAs: 'demoCtrl',
			params: {
        		component: 'tabs'
      		}
		})

		$urlRouterProvider.otherwise('/home');

	});

})(angular);