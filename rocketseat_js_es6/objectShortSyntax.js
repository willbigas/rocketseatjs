const nome = 'Diego';
const idade = 23;

// Forma original
const usuario1 =  {
    nome:  nome,
    idade: idade,
    empresa: 'Roketseat',
}

// Forma usando ObjectShortSyntax // se as variaveis são iguais podemos usar 1x só
const usuario2 =  {
    nome,
    idade,
    empresa: 'Roketseat',
}

console.log(usuario2);