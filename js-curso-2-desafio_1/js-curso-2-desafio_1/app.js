function calcularIMC(altura, peso) {
  IMC = (parseInt(peso / (altura * altura)));
  return IMC;
}
let resultadoIMC = calcularIMC (1.72, 53 )
console.log (`seu IMc e de ${resultadoIMC}`);

function calcularFatorial(fatorial1,fatorial2,fatorial3,fatorial4){
  calculo = (fatorial1 * fatorial2 * fatorial3 * fatorial4);
  return calculo;
}
let resultadoFatorado = calcularFatorial(4, 3, 2, 1)
console.log (`a fatoração e igual a ${resultadoFatorado}`)

function conversaoDolar(dolar, cambio){
  conversao = (dolar * cambio);
  return conversao;
}
let resultadoConversao = conversaoDolar(100, 4.80)
console.log (`a conversao deu ${resultadoConversao}`);

function calcularAreaEPerimetro(altura, largura){
  area = (altura * largura);
  return area;
  perimetro = 2 * (altura + largura);
  return perimetro;
}
let resultadoAreaEPerimetro = calcularAreaEPerimetro(3, 5);
console.log (`a area da sala e de ${resultadoAreaEPerimetro} metros quadrados`);
let resultadoPerimetro = calcularAreaEPerimetro (3, 5);
console.log (`o perimetro da sala e de ${resultadoPerimetro} metros`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando
//seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEPerimetroCirculo (raio){
pi = (3.14); 
area = pi * (Math.pow(raio, 2));
 return area;
}
resultadocirculo = calcularAreaEPerimetroCirculo(6);
console.log (`o resultado do bagulho e ${resultadocirculo}`);

function exibirTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
  }
}
exibirTabuada(7);


listaGenerica = [] 

linguagemDeProgramação = ['JavaScript', 'C', 'C++', 'Kotlin', 'GoLang']

 nomes = ['mateus', 'Lucas', 'Gabriel'] 
 console.log (nomes[0])

 nomes = ['mateus', 'Lucas', 'Gabriel'] 
 console.log (nomes[1])

 nomes = ['mateus', 'Lucas', 'Gabriel'] 
 console.log (nomes[2])


 let valorDolar = 4.97;
let valorReal = gerarValorEmReal();
let taxa = 0;
let valorFinal = 0;

function gerarValorEmReal() {
    let valorEscolhido = parseFloat((Math.random() * 1000 + 1).toFixed(2));
    return valorEscolhido;
}

function conversao(valor) {
    resultado = valor / valorDolar;
    return resultado;
}


let valorConvertidio = conversao(valorReal);

function taxacao() {
    if (valorConvertidio >= 100) {
        taxa = valorConvertidio * 0.05;
        valorFinal = valorConvertidio - taxa;
    } else if (valorConvertidio > 500 && valorConvertidio <= 1000) {
        taxa = valorConvertidio * 0.07;
        valorFinal = valorConvertidio - taxa;
    } else {
        valorFinal = valorConvertidio;
    }
    return valorFinal;
}

console.log(`Você quer converter R$ ${valorReal}, para o dólar americano \n`);
console.log(`A cotação do dólar hoje é de US$ ${valorDolar}\n`);
console.log(`O valor convertido fica em US$ ${valorConvertidio.toFixed(2)}`);
console.log(`Com uma taxa de ${taxa.toFixed(2)}`);
console.log(`Valor final em US$ ${valorFinal.toFixed(2)}`);


 
 



