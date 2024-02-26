const computador: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

function gerarEtiqueta(item: { produto: string, lote: number, ano: number, qtd: number }): string[] {

    if (item.qtd < 1) {
        return ['A quantidade (qtd) deve ser maior que zero']
    }

    let resultado: string[] = []

    for (let i = 1; i <= item.qtd; i++) {

        if (i < 10) {
            resultado.push(`${item.lote}-${item.ano}-00${i}`)
        } else if (i < 100) {
            resultado.push(`${item.lote}-${item.ano}-0${i}`)
        } else {
            resultado.push(`${item.lote}-${item.ano}-${i}`)
        }

    }

    return resultado
}


console.log(gerarEtiqueta(computador));