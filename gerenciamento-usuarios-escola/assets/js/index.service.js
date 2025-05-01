app.service("UsuarioService", function($q, $timeout) {
  let usuarios = [
    { nome: "Ana Souza", email: "ana@email.com", tipo: "Aluno", dataCadastro: new Date() },
    { nome: "Carlos Mendes", email: "carlos@email.com", tipo: "Professor", dataCadastro: new Date() },
    { nome: "Bruna Lima", email: "bruna@email.com", tipo: "Aluno", dataCadastro: new Date() },
    { nome: "Eduardo Silva", email: "eduardo@email.com", tipo: "Professor", dataCadastro: new Date() },
    { nome: "Fernanda Rocha", email: "fernanda@email.com", tipo: "Aluno", dataCadastro: new Date() },
  ];

  this.listar = function() {
    return usuarios;
  };

  this.salvar = function(usuario) {
    return $q(function(resolve) {
      $timeout(function() 
      {
        usuario.dataCadastro = new Date();
        usuarios.push(usuario);
        resolve("Usuario cadastrado com sucesso!!");
      },
       2000);
    });
  };

  this.remover = function(index) {
    usuarios.splice(index, 1);
  };
});
