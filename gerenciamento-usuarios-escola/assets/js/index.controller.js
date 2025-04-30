
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