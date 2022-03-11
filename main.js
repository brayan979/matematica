import {filas,generadorFichero,formato} from './js/tartaglia.js'
import {criba,generarLista} from './js/eratostenes.js'
import {division} from './js/mcm_mcd.js'
import {descomposicion,esPrimo} from './js/factores_primos.js'

let btnTartaglia = document.querySelector('.tartaglia')
let inputTartaglia = document.querySelector('.inputTartaglia')

let btnEratostenes = document.querySelector('.eratostenes')
let divCriba = document.querySelector('.criba')
let inputCriba = document.querySelector('.inputCriba')

let btnDescomponer = document.querySelector('.btnDescomponer')
let contenedro__descomponer = document.querySelector('.contenedro__descomponer')
let inputDescomponer = document.querySelector('.inputDescomponer')

let inputNum2 = document.querySelector('.inputNum2')
let inputNum1 = document.querySelector('.inputNum1')
let contenedorMcmMcd = document.querySelector('.contenedorMcmMcd')
let btnMcmMcd = document.querySelector('.btnMcmMcd')

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

btnDescomponer.addEventListener('click',() => {
    contenedro__descomponer.innerText = descomposicion(parseInt(inputDescomponer.value, 10))
    inputCriba.value = ''
})

btnMcmMcd.addEventListener('click',() => {
    let resultado = division(BigInt(inputNum1.value),BigInt(inputNum2.value))
    contenedorMcmMcd.innerText = 'MCM: '+ resultado[0] + ' - MCD: '+resultado[1]
    inputNum2.value = ''
    inputNum1.value = ''
})

