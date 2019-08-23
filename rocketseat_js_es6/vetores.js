const arr = [1, 3, 4, 5, 8, 9];
console.log(`Array de Itens : ${arr}`)

// Mapeando array
console.log(" ------- Mapeando por MAP ----------")
const newArr = arr.map(function (item, index) {

    console.log(`Variavel: ${item} - Index : ${index}`) // Percorrendo vetores com array
})
console.log(" ------- Somando com Reduce ----------")
/** Somando valores do Array  */
const sum = arr.reduce(function (total, next) {
    console.log(`Total: ${total} , Next: ${next}`);
    return total + next;

})
console.log(sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(" ------- Filtrando numeros ----------")
console.log(`Numeros pares: ${filter}`);

console.log(" ------- Procurando numeros em um Array ----------")
const find = arr.find(function(item) { // return undefined caso não encontre
    return item ===4;
})
console.log(find);