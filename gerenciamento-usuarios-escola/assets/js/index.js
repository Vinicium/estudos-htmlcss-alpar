const app = angular.module("module", []);
app.controller("AppController", function ($scope) {
  $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";

  $scope.usuario = {
    nome: "João",
    tipo: "Aluno"
  };
  
});
