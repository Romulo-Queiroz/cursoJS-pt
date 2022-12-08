const pessoas = [
    {id: 3, nome:'Rômulo'},
    {id: 2, nome:'Kevin'},
    {id: 1, nome:'Matheus'}
];

const novasPessoas = new Map();

for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}
console.log(novasPessoas.get(3));