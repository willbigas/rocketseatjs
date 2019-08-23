const usuario = {
    nome: 'William',
    idade: 21,
    endereco: {
        cidade: 'Palhoça',
        estado: 'SC',
    },
};

const {nome , idade, endereco: {cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

console.log('------Mostrando nome do Usuário - Desestruturando num function------');
function mostraNome({nome , idade}) {
    console.log(nome , idade);
}
mostraNome(usuario);