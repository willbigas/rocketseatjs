
console.log('-------------Soma com Valores padrões -------------')
function soma(a =2 , b = 4) {
    return a + b;
}

console.log(soma());
console.log(soma(1));

const somaComArrowFunction = (a =2 , b = 4) => a + b;
console.log('-------------Soma com Valores padrões + arrow function-------------')
console.log(somaComArrowFunction())
console.log(somaComArrowFunction(1))