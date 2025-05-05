document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");

  let formValido = true;

  if (regexNome.test(nome.value.trim())) {
    setValid(nome, "Valido", "nome-feedback");
  } else {
    setInvalid(nome, "Invalido", "nome-feedback");
    formValido = false;
  }

  if (regexEmail.test(email.value.trim())) {
    setValid(email, "Valido", "email-feedback");
  } else {
    setInvalid(email, "Invalido", "email-feedback");
    formValido = false;
  }

  if (regexCPF.test(cpf.value.trim())) {
    setValid(cpf, "Valido", "cpf-feedback");
  } else {
    setInvalid(cpf, "Invalido", "cpf-feedback");
    formValido = false;
  }

  if (formValido) {
    alert("Todos os campos estão válidos!");
  }
});

function setValid(input, message, feedbackId) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  const feedback = document.getElementById(feedbackId);
  feedback.textContent = message;
  feedback.className = "feedback valid";
}

function setInvalid(input, message, feedbackId) {
  input.classList.remove("valid");
  input.classList.add("invalid");
  const feedback = document.getElementById(feedbackId);
  feedback.textContent = message;
  feedback.className = "feedback invalid";
}
