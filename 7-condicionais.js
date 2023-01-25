console.log(`Trabalhando com condicionais`);
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
const temPassagemComprada = true;

console.log(`Destinos possíveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

//if = Se
//if(idadeComprador >= 18){
    //console.log("Comprador maior de idade");
    //listaDeDestinos.splice(1,1); // removendo item
//else = Se não

//else if = se for isso
//}else if(estaAcompanhada){
        //console.log("Comprador está acompanhado");
       // listaDeDestinos.splice(1,1); // removendo item
    //}else{
    //console.log("Não é maior de idade") // Se não for verdadeira
   // }

   if(idadeComprador >= 18 || estaAcompanhada == true
    ){
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2,1); // removendo item
//else = Se não

//else if = se for isso
 
    }else{
    console.log("Não é maior de idade") // Se não for verdadeira
    }
 
    console.log("Embarque: \n \n")
    if(idadeComprador >=18 && temPassagemComprada){
        console.log("Boa viagem");
    }else{
        console.log("Você não pode embarcar");
    }

console.log(listaDeDestinos);


// || = ou
//else = Se não
//if = Se
//else if = se for isso
// && = e
// /n = pular linha
//console.log(idadeComprador > 18);  Idade do comprador maior que 18
//console.log(idadeComprador < 18);  Idade do comprador menor que 18
//console.log(idadeComprador <= 18);  Idade do comprador menor ou igual a 18
//console.log(idadeComprador >= 18);  Idade do comprador maior ou igual a 18
//console.log(idadeComprador == 18);  Idade do comprador igual a 18
