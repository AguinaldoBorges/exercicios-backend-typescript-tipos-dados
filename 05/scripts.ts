function soletrar(palavra: string): string {
    let resultado: string = ''

    for (const letra of palavra) {
        if (palavra.indexOf(letra) === 0) {
            resultado += `${letra}`
        } else {
            resultado += `-${letra}`
        }
    }

    return resultado
}

console.log(soletrar('Aguinaldo'));