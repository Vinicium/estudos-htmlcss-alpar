
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

 