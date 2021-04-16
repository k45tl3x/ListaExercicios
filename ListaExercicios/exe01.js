//console.log("Usado para Mostrar informações na tela");
let altura = Math.floor(Math.random() * 100);
let largura = Math.floor(Math.random() * 100);

let area = calcularArea(altura, largura);

console.log(altura, largura);

//template literals é a nomenclatura para interpolação em JS.
let mensagem = `Area : ${ area } + m2`;
console.log(mensagem);
function calcularArea(altura, largura){
    return altura * largura;
}
