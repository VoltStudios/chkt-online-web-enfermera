/**
* pacienteCtrl Module
*
* Modulo que contiene el controlador para la vista individual de un paciente.
*/
angular.module('pacienteCtrl', ['userSrvc'])

.controller('PacienteController', ['$routeParams', 'UserService', function($routeParams ,UserService){
	var self = this;

	this.user = {};
	this.nombre = "";

	UserService.obtenerUsuario($routeParams.curp,
		function success(user) {
			console.log(user);
			self.user = user;
			self.nombre = user.nombre + " " + user.apaterno;
			console.log(self.nombre);
		},
		function failure(response) {
			console.log(response);
		});
}]);
