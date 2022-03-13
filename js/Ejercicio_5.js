
let ficheros = document.querySelector('.ficheros')

const factorial = (num) => {
    let resultado = 1
    if(num == 1) return 1

    for (let i = 2; i <= num; i++) resultado = i * resultado

    return resultado
}

const conmutacion = (m) => {
    let fila = []
    // NO volver a calcular el factorial
    let factorialM = factorial(m)
    //! Calcular solo hasta la mitad de cada fila
    for (let j = 0; j <= Math.floor(m/2); j++) {
        (j == 0) ? fila.push(1) : fila.push(factorialM/(factorial(j)*factorial(m-j))) 
    }
    // Crear una copia de la fila y juntarlo con la fila inversa
    let filaSimetrica = [...fila]
    // Eliminar el ultimo elemento de los pares
    if(m % 2 == 0) filaSimetrica.pop()
    let filaCompleta = fila.concat(filaSimetrica.reverse())


    return filaCompleta
}

export const filas = (f) => {
    let triangulo = []
    triangulo.push([1])

    for (let m = 1; m <= f; m++) {
        triangulo.push(conmutacion(m))
    }
    return triangulo
}

export const generadorFichero = (texto, filename) => {
    let blob = new Blob([texto], {
        type: 'text/txt'
    });
    
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        let elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        ficheros.appendChild(elem);
        elem.innerText = filename
    }
}

export const formato = (triangulo) => {
    let textoCompleto = ''
    for (let i = 0; i < triangulo.length; i++) {
        let fila = ''
        let reverse = triangulo[i].length-1
        for (let j = 0; j < triangulo[i].length; j++) {
            if (j == 0) {
                fila += `${triangulo[i][j]}*x^${reverse}*y^${j} `
            }else
                fila += `+ ${triangulo[i][j]}*x^${reverse}*y^${j} `
            reverse--
        }
        textoCompleto += fila + '\n\n'
    }
    return textoCompleto
} 
