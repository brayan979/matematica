export const descomposicion = (n) => {
    let factorPrimo = 2
    let contarPrimerFactor = true
    // Añade a la lista los numeros primos
    let ls = []
    while (n>1) {
        if(n% factorPrimo === 0){
            if (contarPrimerFactor) {
                ls.push(factorPrimo)
                contarPrimerFactor = false
            }
            else
                ls.push(factorPrimo)
                n /= factorPrimo
        }
        else{
            // Buscar el sigueinte primo
            factorPrimo++
            while (!esPrimo(factorPrimo)) {
                factorPrimo++
            }
        }
            
    }
    return ls
}

// Verificar si es primo
export const esPrimo = (n) => {
    // Descarta los numero que son divisibles entre 2 y pasa al siguiente numero
    if(n <= 1 || n % 2 == 0){
        return false
    }
    let noEsPrimo = false
    let i = 2
    // Proposicion 3.1
    while (i <= Math.sqrt(n) && !noEsPrimo) {
        if (n%i == 0) {
            noEsPrimo = true
        }
        i++
    }
    return !noEsPrimo
}