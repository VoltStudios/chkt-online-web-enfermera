/**
* pacientesCtrl Module
*
* Modulo que contiene el controlador para la sección de directorio de pacientes.
*/
angular.module('pacientesCtrl', ['userSrvc'])

.controller('PacientesController', ['$scope', 'UserService', function($scope ,UserService){
	var self = this;

	this.users = [];
	UserService.obtenerUsuarios(
		function success(response) {
			self.users = response.data.data;
		},
		function failure(response) {
			console.log(response);
		});
}]);
