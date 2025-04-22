/* 
Um arquivo adicional, pode ser ou não uma classe, para realizar o login e armazenar os
usuários em um array. Crie alguns usuários alunos e professores e guarde nesse array. Ao
usuário digitar o email e a senha em uma tela de login, você deve verificar se o email e a
senha batem com um dos usuários no array. Se sim, guardar o usuário no localStorage e
redirecionar para uma tela que exibirá dados, buscando no localStorage. Se não, mostrar
um erro abaixo da senha.
Cada uma das subclasses deve sobrescrever o método exibirPerfil() para incluir suas
informações adicionais.
Depois, crie instâncias de Aluno e Professor e chame o método exibirPerfil() de cada uma
para ver os diferentes comportamentos no console.
Dica: você pode usar innerHTML += ‘...’ para mostrar os dados na página.
Dica: Use window.location.href para redirecionar entre páginas.
Guarde esse desafio no repositório de sempre na pasta: sistema-escolar  */

const usuarios = [
  new aluno("João", "joao@email.com", "1234", "1A"),
  new aluno("Maria", "maria@email.com", "abcd", "2B"),
  new professor("Carlos", "carlos@email.com", "prof123", ["Matemática"]),
  new professor("Ana", "ana@email.com", "prof456", ["Português"]),
];

  document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("exampleInputEmail1").value;
  const senha = document.getElementById("exampleInputPassword1").value;


 

  const usuario = usuarios.find(
    (u) => u.email === email && u.password === senha
  );
  
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  if (usuario) {
    window.location.href = "dados.html";
  } else {
    alert("Email ou senha invalidos!");
  }
});

usuarios[0].exibirPerfil();
usuarios[3].exibirPerfil();