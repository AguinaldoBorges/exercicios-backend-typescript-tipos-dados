function gerarTabuadas(numeros: number[]): string {
    let resultado: string = ''
    for (const numero of numeros) {
        resultado += `
    ${numero} x 1 = ${numero * 1}
    ${numero} x 2 = ${numero * 2}
    ${numero} x 3 = ${numero * 3}
    ${numero} x 4 = ${numero * 4}
    ${numero} x 5 = ${numero * 5}
    ${numero} x 6 = ${numero * 6}
    ${numero} x 7 = ${numero * 7}
    ${numero} x 8 = ${numero * 8}
    ${numero} x 9 = ${numero * 9}
    ${numero} x 10 = ${numero * 10}
    ------------
    `
    }

    return resultado
}

console.log(gerarTabuadas([1, 5, 2]));