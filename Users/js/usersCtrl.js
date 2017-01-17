angular.module("users").controller("usersCtrl", function($scope, $http){
	$scope.app = "Usuários";
	var carregarUsers = function(){
		$http.get("http://localhost:9000/userServer/users").then(function(response){
			$scope.users = response.data;
		});
	};

	$scope.generos = [
		{id: "M", descricao: "Masculino"},
		{id: "F", descricao: "Feminino"}
	];

	$scope.adicionarUsuario = function(user){
		$http.post("http://localhost:9000/userServer/users", contato);
		delete $scope.user;
		$scope.userForm.$setPristine();
		carregarUsers();
	};
	carregarUsers();
});