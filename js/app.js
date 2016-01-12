/**
* chktAppEnfermera Module
*
* Modulo principal de la aplicación. Define las rutas y determina las dependencias generales.
*/
angular.module('chktAppEnfermera', ['ngRoute', 'mainCtrl', 'loginCtrl', 'pacientesCtrl', 'pacienteCtrl',
	'headerDrctv','footerDrctv'])

.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider

	.when("/", {
		templateUrl: "/partials/login.html",
		controller: "LoginController as login"
	})

	.when("/pacientes", {
		templateUrl: "/partials/pacientes.html",
		controller: "PacientesController as pacientes"
	})

	.when("/paciente/:curp", {
		templateUrl: "/partials/paciente.html",
		controller: "PacienteController as paciente"
	});

	$locationProvider.html5Mode(true);
}])

.value('apiSite', "https://phoenix-down-chkt.herokuapp.com");
