(function(ng) {

	'use strict';

	ng.module('shop-bunny')

	.factory('$dialog', Dialog);

	Dialog.$inject = ['$mdDialog'];

	function Dialog($mdDialog) {

		var dialogTypes = ['alert', 'confirm', 'prompt', 'advanced'];

		var defaults = {
			type 				: 'alert',
			parent 				: document.body,
			clickOutsideToClose : false,
			title: 'Dialog Test',
			content: 'Sweet material dialog',
			placeholder: 'Enter something',
			ariaLabel: 'Dialog',
			okText: 'OK',
			cancelText: 'Cancel',
			useFullScreen: true,
			controller: null,
			templateUrl: null
		};

		var show = function(config, scope, event) {

			config = ng.extend(ng.copy(defaults), config);

			if(dialogTypes.indexOf(config.type) === -1) {
				throw Error('Invalid dialog type.');
				return;
			}

			var dialog;
			switch(config.type) {
				case 'alert':
					dialog = $mdDialog.alert()
						.parent(config.parent)
						.clickOutsideToClose(config.clickOutsideToClose)
						.title(config.title)
						.textContent(config.content)
						.ariaLabel(config.ariaLabel)
						.ok(config.okText)
						.targetEvent(event);
					break;
				case 'confirm':
					dialog = $mdDialog.confirm()
						.title(config.title)
						.textContent(config.content)
						.ariaLabel(config.ariaLabel)
						.ok(config.okText)
						.cancel(config.cancelText)
						.targetEvent(event);
					break;
				case 'prompt':
					dialog = $mdDialog.prompt()
						.title(config.title)
						.textContent(config.content)
						.placeholder(config.placeholder)
						.ariaLabel(config.ariaLabel)
						.ok(config.okText)
						.cancel(config.cancelText)
						.targetEvent(event);
					break;
				case 'advanced':
					if(!config.controller || !config.templateUrl) {
						throw Error('No controller or templateUrl provided for the dialog');
						return;
					}
					dialog = {
						controller: config.controller,
						templateUrl: config.templateUrl,
						parent: config.parent,
						targetEvent: event,
						clickOutsideToClose: config.clickOutsideToClose,
						fullscreen: config.useFullScreen
					};
					break;
			}

			return $mdDialog.show(dialog);
		};

		var hide = function() {
			$mdDialog.hide();
		};

		return {
			show: show,
			hide: hide
		}

	}

})(angular);