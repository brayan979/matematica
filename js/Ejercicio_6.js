
// Genera una lista de array hasta el numero indicado que se ira depurando en la funcion criba()
export const generarLista = (n) => {
    let ls = []
    for (let i = 2; i <= n; i++) {
        ls.push(i)
    }
    return ls
}

export const criba = (lista) => {
    let flag = false
    // Empiezo por el numero 2 que esta el la posicion 1 del array
    let primo = 0
    let contador = 0
    // Proposicion 1
    while ( (lista[primo] <= Math.sqrt(lista[lista.length-1])) && !flag ) {
        for (let i = 0; i < lista.length; i++) {
            // Eliminacion de multiplos
            if(lista[i] % lista[primo] == 0 && lista[primo] != lista[i] ){
                lista.splice(i,1)
                contador++
            }
        }
        if(contador == 0){
            flag = true
        }
        contador = 0
        primo++
    }

    console.log(lista);
    return lista
  
}

