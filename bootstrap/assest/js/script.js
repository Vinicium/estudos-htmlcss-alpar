function val(elementId) {
    const element = document.getElementById(elementId);
    element.addEventListener('input', function() {
      console.log(this.value);
      if(this.value != "") {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
      } else {
        this.classList.remove('is-valid');
      }
    });
  }
  
  // Aplicar a vários IDs
  val('assunto');
  val('mensagem');
  val('nome');

 
document.getElementById('email').addEventListener('input', function() {
  if(this.value.includes('@')) {
    this.classList.add('is-valid');
    this.classList.remove('is-invalid');
  } else {
  
    this.classList.remove('is-valid');
  }
});
 

document.getElementById('form-contato').addEventListener('submit', function(event) {
 
    event.preventDefault(); 
    alert('Mensagem enviada com sucesso!'); 
    this.reset();
    console.log("")
  });