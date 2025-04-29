const app = angular.module("module", []);

app.service("UsuarioService", function() {
  let usuarios = [
    { nome: "Ana Souza", tipo: "Aluno", dataCadastro: new Date() },
    { nome: "Carlos Mendes", tipo: "Professor", dataCadastro: new Date() },
    { nome: "Bruna Lima", tipo: "Aluno", dataCadastro: new Date() },
    { nome: "Eduardo Silva", tipo: "Professor", dataCadastro: new Date() },
    { nome: "Fernanda Rocha", tipo: "Aluno", dataCadastro: new Date() },
  ];

  this.listar = function() {
    return usuarios;
  };

  this.adicionar = function(usuario) {
    usuarios.push(usuario);
  };

  this.remover = function(index) {
    usuarios.splice(index, 1);
  };
});

app.controller("AppController", function($scope, UsuarioService) {
  $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
  $scope.showAluno = false;
  $scope.showProfessor = false;

  $scope.usuarios = UsuarioService.listar();

  $scope.adicionarUsuario = function() {
    if ($scope.novoUsuario.nome && $scope.novoUsuario.tipo) {
      $scope.novoUsuario.dataCadastro = new Date(); 
      UsuarioService.adicionar($scope.novoUsuario);
      $scope.novoUsuario = {};
    }
  };

  $scope.removerUsuario = function(index) {
    UsuarioService.remover(index);
  };
});
