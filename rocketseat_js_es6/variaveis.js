/******************* CONST ***********************/

// Mutação - Altera os valores sem alterar o formato
const usuario = {nome: 'Diego'};
usuario.nome = 'Cleiton';

// // Erro , pois está mudando a variavel diretamente
// const a = 2;
//     a = 3;


/********************* LET *******************/

function teste(x) {
    let y  = 2;

    if (x > 5) {
        y = 6; // escopo permitido
        console.log(x, y);
    }
}
// y = 8; // isso vai da pau , pq ta fora do escopo de teste

console.log(teste(10));

