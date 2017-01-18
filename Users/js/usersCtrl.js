angular.module("users").controller("usersCtrl", function($scope, $http){
	$scope.app = "Cadastro de Usuários";
	$scope.carregarUsers = function(){
		$http.get("http://localhost:9000/userServer/users").then(function(response){
			$scope.users = response.data;
		});
	};

	$scope.users = [];
//	$scope.userForm = "";

	$scope.generos = [
		{id: "M", descricao: "Masculino"},
		{id: "F", descricao: "Feminino"}
	];

	$scope.adicionarUsuario = function(user){
		$http.post("http://localhost:9000/userServer/users", user).then(function(response){
			delete $scope.user;
			$scope.clicado = false;
			$scope.carregarUsers();
		});
	};

	$scope.apagarUsers = function(users){
		$scope.users = users.filter(function(user){
			if(!user.selecionado) return user;
		});
	};

	$scope.isUserSelecionado = function(users){
		return users.some(function(user){
		return user.selecionado;
		});
	};

	$scope.mostrarFormAddUser = function(clicado){
		$scope.clicado = clicado;
		return $scope.clicado;
	};

	$scope.carregarUsers();
});