import {filas,generadorFichero,formato} from './js/tartaglia.js'
import {criba,generarLista} from './js/eratostenes.js'
import {division} from './js/mcm_mcd.js'
import {descomposicion,esPrimo} from './js/factores_primos.js'

let btnTartaglia = document.querySelector('.tartaglia')
let inputTartaglia = document.querySelector('.inputTartaglia')

let btnEratostenes = document.querySelector('.eratostenes')
let divCriba = document.querySelector('.criba')
let inputCriba = document.querySelector('.inputCriba')


btnTartaglia.addEventListener('click', (e) => {
    let triangulo = filas(parseInt(inputTartaglia.value, 10) )
    console.log(formato(triangulo));
    generadorFichero(formato(triangulo),`tartaglia_n${triangulo.length-1}.txt`)
    inputTartaglia.value = ''
})
btnEratostenes.addEventListener('click',() => {
    divCriba.innerText = criba(generarLista(parseInt(inputCriba.value, 10)))
    inputCriba.value = ''
})

//division(BigInt(10807),BigInt(6876867))
descomposicion(16000040)
