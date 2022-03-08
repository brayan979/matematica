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
    let counter = 0
    
    while ( (lista[primo] <= Math.sqrt(lista[lista.length-1])) && !flag ) {
        for (let i = 0; i < lista.length; i++) {
            // Eliminacion de multiplos
            if(lista[i] % lista[primo] == 0 && lista[primo] != lista[i] ){
                lista.splice(i,1)
                counter++
            }
        }
        if(counter == 0){
            console.log('Fin de la criba <= ',lista[primo]);
            flag = true
        }
        counter = 0
        primo++
    }

    console.log(lista);
    return lista
  
}

