export const descomposicion = (n) => {
    let factorPrimo = 2
    let contarPrimerFactor = true
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
    if(n <= 1 || n % 2 == 0){
        return false
    }
    let noEsPrimo = false
    let i = 2
    
    while (i <= Math.sqrt(n) && !noEsPrimo) {
        if (n%i == 0) {
            noEsPrimo = true
        }
        i++
    }
    return !noEsPrimo
}