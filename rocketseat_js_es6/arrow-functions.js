const arr = [1,3,4,5,6];

console.log("----- Função normal multiplicando resultado por 2 ----");
// arro function com callback
const newArr = arr.map(item => item *2)
console.log(newArr);

// Arrow function com corpo
const teste = () => {
    return 'teste';
}
console.log(teste());
// arrow function sem corpo
const teste2 = () => 'Teste2';
console.log(teste2());

const teste3 = () => ({nome: 'Diego'}); // colocar parenteses em volta para objeto
console.log(teste3());