
// Indentica el numero maximo y el minimo para proceder con las divisiones
const maximo = (n1,n2) => {
    if (n1 > n2) return n1
    return n2
}
const minimo = (n1,n2) => {
    if (n1 < n2) return n1
    return n2
}
export const euclides = (num1,num2) => {
    // mcm 200, mcd 2
    let resto = 1n
    let cociente = 0n
    let salida = false

    let max = maximo(num1,num2)
    let min = minimo(num1,num2)

    let mcd = 0n
    // Realiza el algoritmo de euclides
    while (!salida) {
        resto = max % min
        cociente = (max-resto)/ min
        if (resto == 0) {
            mcd = min
            salida = true
        }else{
            max = min
            min = resto
        }
    }
    // Proposicion 4.2 : Calculo le minimo comun multiplo con el MCD
    let mcm = BigInt((num1 * num2)/ mcd)

    return [mcm,mcd]
}

