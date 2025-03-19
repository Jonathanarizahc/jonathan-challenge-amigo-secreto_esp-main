// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresSorteo = [];

limpiarLista();

function ingresarValor() {
    return document.getElementById(`amigo`).value;
}

function agregarAmigo() {
    var valorEnCaja = ingresarValor();
    if(valorEnCaja == ``){
        alert(`ingrese un nombre`);
    }
    else {
        listaNombresSorteo.push(valorEnCaja);
        document.getElementById(`amigo`).value=``;
        document.getElementById(`amigo`).focus();
    }
    recorrerLista();
}

function recorrerLista(){
    let listaAmigos = document.getElementById(`listaAmigos`)
    listaAmigos.innerHTML = ``;

    for(i=0; i<listaNombresSorteo.length; i++ )
    {
        let elementoHTML = document.createElement(`li`);
        elementoHTML.textContent = `Num ${i+1} .- ${listaNombresSorteo[i]}`;
        listaAmigos.appendChild(elementoHTML);
    }
}
function sortearAmigo() {
    if (listaNombresSorteo.length==0)
    {
        alert(`No hay participantes `);
        return;
    }
    let amigoSecreto = listaNombresSorteo[Math.floor(Math.random()* listaNombresSorteo.length)];
    let resultado = document.getElementById(`resultado`);
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
}
function limpiarLista() {
    listaNombresSorteo = [];
    recorrerLista();
    document.getElementById(`resultado`).innerHTML = ``;
}