(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.controller('DemoController', DemoController);

	DemoController.$inject = ['$state', '$stateParams', '$dialog', '$http'];

	function DemoController($state, $stateParams, $dialog, $http) {

		var vm = this;

		vm.component = $stateParams.component;

		vm.showAlert 	= showAlert;
		vm.showConfirm 	= showConfirm;
		vm.showPrompt 	= showPrompt;
		vm.showAdvanced = showAdvanced;

		vm.fabDirection = 'right';

		function showAlert() {
			var config = {
				type: 'alert',
				parent: document.body,
				clickOutsideToClose: true,
				title: 'Alert Dialog Demo',
				content: 'This is sweet material alert',
				ariaLabel: 'Dialog',
				okText: 'Yeah',
				cancelText: 'Nopes',
			};

			$dialog.show(config);
		}

		function showConfirm() {
			var config = {
				type: 'confirm',
				parent: document.body,
				clickOutsideToClose: false,
				title: 'Alert Dialog Demo',
				content: 'This is sweet material alert',
				ariaLabel: 'Dialog',
				okText: 'Yeah',
				cancelText: 'Nopes',
			};

			$dialog.show(config)
			.then(function() {
				alert('You agreed.');
			}, function() {
				alert('You denied.');
			});
		}

		function showPrompt() {
			var config = {
				type: 'prompt',
				parent: document.body,
				clickOutsideToClose: false,
				title: 'Alert Dialog Demo',
				content: 'This is sweet material alert',
				ariaLabel: 'Dialog',
				okText: 'Yeah',
				cancelText: 'Nopes',
				placeholder: 'Enter something'
			};

			$dialog.show(config)
			.then(function(result) {
				alert('You entered ' + result + '.');
			}, function() {
				alert('You entered nothing.');
			});
		}

		function showAdvanced() {

		}

		if(vm.component === 'productComp') {
			var vm = this;
			var productsUrl = 'config/products.json';

			$http({
				method: 'GET',
				url: productsUrl
			}).then(function(response) {
				vm.products = response.data.products;
			});
		}
		
	}

})(angular);