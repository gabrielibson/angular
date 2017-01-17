angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
	$scope.app = "Lista Telefônica";
	$scope.operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 2},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 3}
	];
	$scope.contatos = [
	{nome: $filter("uppercase")("Pedro"), telefone: "99998888", data: new Date(), operadora: $scope.operadoras[0], cor: "yellow"},
	{nome:$filter("uppercase")("Ana"), telefone: "99998877", data: new Date(), operadora: $scope.operadoras[1], cor: "blue"},
	{nome:$filter("uppercase")("Maria"), telefone: "99998866", data: new Date(), operadora: $scope.operadoras[2], cor: "purple"}
	];
	$scope.adicionarContato = function(contato){
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
		return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
});