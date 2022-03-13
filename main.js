import {filas,generadorFichero,formato} from './js/Ejercicio_5.js'
import {criba,generarLista} from './js/Ejercicio_6.js'
import {division} from './js/Ejercicio_7.js'
import {descomposicion} from './js/Ejercicio_8.js'

let btnTartaglia = document.querySelector('.tartaglia')
let inputTartaglia = document.querySelector('.inputTartaglia')
let contenidoT = document.querySelector('.contenidoT')

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
    console.log(triangulo);
    let formatoTexto = formato(triangulo)
    generadorFichero(formatoTexto,`tartaglia_n${triangulo.length-1}.txt`)
    contenidoT.innerText = formatoTexto
    inputTartaglia.value = ''
})
btnEratostenes.addEventListener('click',() => {
    let resultado = criba(generarLista(parseInt(inputCriba.value, 10)))
    divCriba.innerText = 'Numero:'+inputCriba.value+ '\n'+resultado
    inputCriba.value = ''
})


btnMcmMcd.addEventListener('click',() => {
    let resultado = division(BigInt(inputNum1.value),BigInt(inputNum2.value))
    console.log(resultado);
    contenedorMcmMcd.innerText = '\nNumeros: '+ inputNum1.value +' - '+ inputNum2.value +'\n  MCM('+ inputNum1.value+',' +inputNum2.value +') = '+ resultado[0] + '\n MCD('+ inputNum1.value+',' +inputNum2.value +') ='+resultado[1]
    inputNum2.value = ''
    inputNum1.value = ''
})




btnDescomponer.addEventListener('click',() => {
    let resultado = descomposicion(parseInt(inputDescomponer.value, 10))
    console.log(resultado);
    contenedro__descomponer.innerText = '\n'+resultado.toString().replace(/,/g, '*')
    inputCriba.value = ''
})