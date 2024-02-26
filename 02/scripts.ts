const lista: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function buscarUsuario(lista: { nome: string, idade: number, status: boolean }[], nome: string) {
    let resultado: {}[] = []
    for (const usuario of lista) {
        if (usuario.nome.includes(nome)) {
            resultado.push(usuario)
        }
    }

    return resultado
}

console.log(buscarUsuario(lista, 'Jo'));