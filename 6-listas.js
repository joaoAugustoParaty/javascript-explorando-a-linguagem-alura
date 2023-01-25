console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

//Array  armazenar diversos dados
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
// Adicionando um item na lista
listaDeDestinos.push(`Curitiba`) 

console.log(`Destinos possíveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // São Paulo está na posição 1 porque a contagem começa da posição Zero. O outro numero é a quantidade de elementos que vc quer deletar
console.log(listaDeDestinos);

//Depois de deletar São Paulo Rio de Janeiro se torna o elemento 1
//Já conseguimos adicionar e remover itens, mas como exibir destinos específicos ao nosso cliente? Para esse comportamento de exibição, em nosso console.log() adicionaremos entre colchetes a posição da cidade que desejamos exibir, no caso, Rio de Janeiro.
console.log(listaDeDestinos[1]);

//Será impressa apenas a cidade da posição correspondente. Podemos, também, imprimir duas cidades específicas:
console.log(listaDeDestinos[1], listaDeDestinos[0]);