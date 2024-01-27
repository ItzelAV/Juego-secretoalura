//let titulo =  document.querySelector('h1'); //para conectar el html con JavaScript mediante document.query
//titulo.innerHTML = 'Juego del numero secreto';  //para asignar el titulo

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

//function asignarTextoElemento() {
//    let titulo =  document.querySelector('h1'); //para conectar el html con JavaScript mediante document.query
//titulo.innerHTML = 'Juego del numero secreto';  //para asignar el titulo
//}

//function verificarIntento() {
//    alert ('Click desde el boton'); //funcion sirve para darle funcion a una variable de HTML
//       //onclick sirve para hacer funcionar un boton y se puede llamar con una funcion
//} 
//todo este codigo puede ser simplificado por el siguiente:

let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados =[];
let numeroMaximo = 50;
//console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = (document.querySelector(elemento)); //para conectar el html con JavaScript mediante document.query
    elementoHTML.innerHTML = texto;  //para asignar el titulo
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario'). value);  //funcion sirve para darle funcion a una variable de HTML
    
     //=== validacion de valores iguales ej numero/numero o string/string
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar'). removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;  //onclick sirve para hacer funcionar un boton y se puede llamar con una funcion
} //document.getElementById sirve para llamar un elemento en especifico con el id asignado

function limpiarCaja() {
    document.querySelector('#valorUsuario'). value = '';
    //valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) +1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length ==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else{
    // console.log(`Numero Generado : ${numeroGenerado}`)
     //si el numero generado esta incluido en la lista //se debe tener cuidado de no poder quebrar la recursividad
     if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
     } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
            
    } 
}

function condicionesIniciales(){
    //indicar mensaje de intervalo de numeros
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p',` Indica un numero del 1 al ${numeroMaximo}`);
     //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
     //inicializar el numero intentos
    intentos =1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
   
    condicionesIniciales(); 

     //deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar'). setAttribute('disabled','true');
   
   
}

condicionesIniciales();
//ctrl+F para buscar algo especifico en el programa





