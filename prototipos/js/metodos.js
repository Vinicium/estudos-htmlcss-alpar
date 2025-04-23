/* No JavaScript, arrays herdam métodos úteis através de Array.prototype, como map, filter,
reduce e outros.
Neste desafio, sua missão é recriar alguns desses métodos manualmente, simulando
como eles funcionam por trás dos panos.
Regras:
1. Crie um array qualquer com alguns números ou strings.
2. Recrie manualmente os seguintes métodos usando Array.prototype:

o meuMap()
o meuFilter()
o meuReduce()

Cada um deles deve funcionar da mesma forma que o original:
Exemplo esperado:
const numeros = [1, 2, 3];
const dobrados = numeros.meuMap(n => n * 2); // [2, 4, 6]
Dicas:
 Use Array.prototype.meuMap = function(callback) { ... }
 Use this para acessar o array dentro da função
 Teste comparando o resultado com os métodos nativos
Desafio bônus: recrie também meuForEach() ou meuFind()
Guarde esse desafio no repositório de sempre na pasta: prototipos */

 
const numeros = [1, 2, 3, 4, 5, 6];
 
Array.prototype.meuMap = function(callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i], i, this));
  }
  return resultado;
};

 
Array.prototype.meuFilter = function(callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }
  return resultado;
};



Array.prototype.meuReduce = function(callback, valorInicial) {
  let acumulador = valorInicial !== undefined ? valorInicial : this[0];
  let i = valorInicial !== undefined ? 0 : 1;

  for (; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }

  return acumulador;
};

Array.prototype.meuForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};


console.log("meuMap:", numeros.meuMap(n => n * 2));
console.log("meuFilter:", numeros.meuFilter(n => n % 2 === 0));
console.log("meuReduce:", numeros.meuReduce((acc, n) => acc + n, 0));
 
console.log("meuForEach:");

numeros.meuForEach((n, i) => {
  console.log(`${n}`);
});
