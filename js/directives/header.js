/**
* headerDrctv Module
*
* Modulo que contiene la directiva para el header ubicado en múltiples páginas del sitio
*/
angular.module('headerDrctv', [])

.directive('chktHeader', ['$rootScope', function($rootScope){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: ['$scope', '$element', '$attrs', '$transclude', '$rootScope',
			function($scope, $element, $attrs, $transclude, $rootScope) {
				if ($rootScope.user) {
					this.user = $rootScope.user.data;
				} else {
					this.user = {};
				}
			}],
		controllerAs: 'header',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/templates/header.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);