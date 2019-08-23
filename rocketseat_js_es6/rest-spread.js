// REST OPERATOR //

/** ------ Object ----------------------- */
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const { nome, ...resto } = usuario;

console.log(`Nome do Usuario: ${nome}`);
console.log(resto);

/**  ----------------------- Array ------*/

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

/** ----------------  Functions params --------------- */

function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log('Soma dos valores usando Function params')
console.log(soma(1, 3, 4));

function somaPegandoResto(a , b , ...params) {
    return params;
}
console.log(somaPegandoResto(1, 4 , 6 , 8));


// SPREAD OPERATOR //

const arr1 = [1 , 2 , 3];
const arr2 = [4 ,5 , 6];

const arr3 = [...arr1 , ...arr2];
console.log('Spread arrays ')
console.log(arr3);

// SPREAD IN OBJECT

const usuario1 = {
    nome: 'William',
    idade: 23,
    empresa: 'Rocketseat',
};


const usuario2 = {...usuario1, nome: 'Gabriel'};
console.log('Sobreposição de usuário usando Spread')
console.log(usuario1)
console.log(usuario2);
