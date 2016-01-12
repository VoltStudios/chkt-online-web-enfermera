angular.module('userSrvc', [])

.factory('UserService', ['$http', '$rootScope', 'apiSite', function usersFactory($http, $rootScope, apiSite) {
	var user = {};

	var me = function(successCallback, failureCallback) {
		$http.get(apiSite + '/api/me').then(successCallback, failureCallback)
	}

	return {
		login: function(curp, password, successCallback, failureCallback) {
			$http.post(apiSite + "/api/login", {"user": {"curp": curp, "password": password}})
			.then(function loginSuccess(response) {
				$http.defaults.headers.common.Authorization = response.data.access_token;

				me(function meSuccess(response) {
					$rootScope.user = response.data.data;
					successCallback(response);
				}, function meFailure(response) {
					console.log(response);
					failureCallback(response);
				});
			}, function loginFailure(response) {
				console.log(response);
				failureCallback(response);
			});
		},

		me: me,

		registrarse: function(user, successCallback, failureCallback) {
			$http.post(apiSite + "/api/users", {"user": user})
			.then(successCallback, failureCallback);
		},

		enviarStatus: function(status, successCallback, failureCallback) {
			if ($rootScope.user && $rootScope.user.data) {
				console.log(status);

				$http.post(apiSite + "/api/users/" + $rootScope.user.data.id + "/user_statuses", 
				{"user_status": status})
				.then(successCallback, failureCallback);
			} else {
				failureCallback({error: "El usuario no ha hecho login"});
			}
		},

		obtenerUsuarios: function(successCallback, failureCallback) {
			$http.get(apiSite + "/api/users").then(successCallback, failureCallback);
		},

		obtenerUsuario: function(user, successCallback, failureCallback) {
			$http.get(apiSite + "/api/users/" + user).then(
				function success(response) {
					successCallback(response.data.data);
				}, failureCallback);
		}
	};
}]);

