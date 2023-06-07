

//Tomo el valor ingresado en cantidad y lo alamceno en una variable

const entradaCantidad= document.getElementById('entradaCantidad');

const btnCalcular= document.getElementById('btnResumen');

const inputCategoria= document.getElementById('inputCategoria');

const importeTotal=document.getElementById('importeTotal');

//Al apretar el boton resumen se llama a la funcion descuentoCal()

function descuentoCal(){

    console.log(inputCategoria.value);
    switch (inputCategoria.value) {
        case "estudiante":
            importeTotal.value=(entradaCantidad.value*40);
            break;
        case "trainee":
            importeTotal.value=(entradaCantidad.value*100);
            break;
        case "junior":
            importeTotal.value=(entradaCantidad.value*170);
            break;
        default:
            importeTotal.value=(entradaCantidad.value*200);
            break;
    }
    importeTotal.innerHTML=importeTotal.value
}