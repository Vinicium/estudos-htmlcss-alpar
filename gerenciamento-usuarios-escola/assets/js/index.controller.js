app.controller("AppController", function($scope, UsuarioService) {
  $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
  $scope.showAluno = false;
  $scope.showProfessor = false;
  $scope.usuarios = UsuarioService.listar();
  $scope.novoUsuario = {};
  $scope.carregando = false;
  $scope.mensagemSucesso = "";

  $scope.adicionarUsuario = function() {
    /* if ($scope.formUsuario.$valid) */  
    
      $scope.carregando = true;
      $scope.mensagemSucesso = "";
      UsuarioService.salvar(angular.copy($scope.novoUsuario)).then(function(mensagem) {
        $scope.mensagemSucesso = mensagem;
        $scope.novoUsuario = {};
        $scope.formUsuario.$setPristine();
        $scope.formUsuario.$setUntouched();
      }).finally(function() {
        $scope.carregando = false;
      });
    
  };

  $scope.removerUsuario = function(index) {
    UsuarioService.remover(index);
  };
});
