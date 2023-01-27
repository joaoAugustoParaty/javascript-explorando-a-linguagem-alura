console.log(`\n Trabalhando com condicionais`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

//Array  armazenar diversos dados
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada =false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);


   const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
    
let contador = 0;
let destinoExiste = false;
while(contador<3){
if(listaDeDestinos[contador] == destino){
    console.log("Destino existe");
    destinoExiste = true;
    break;
}
contador += 1; //dessa maeira não entra em loop infinto
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem")
}else{
    console.log("Descuple tivemos um erro!");
}

for(let i = 0 ; i < 3; cont++){
    if(listaDeDestinos[i] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        
    }
    }
    


// || = ou
//else = Se não
//if = Se
//else if = se for isso
//while = enquanto
//for = enquanto, funciona como looping igual o while
//++ = +1
//break = pula etapa
// && = e
// /n = pular linha
//console.log(idadeComprador > 18);  Idade do comprador maior que 18
//console.log(idadeComprador < 18);  Idade do comprador menor que 18
//console.log(idadeComprador <= 18);  Idade do comprador menor ou igual a 18
//console.log(idadeComprador >= 18);  Idade do comprador maior ou igual a 18
//console.log(idadeComprador == 18);  Idade do comprador igual a 18
