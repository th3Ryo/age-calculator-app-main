const inputDia = document.querySelector("#ingresoDia")
const inputMes = document.querySelector("#ingresoMes")
const inputYear = document.querySelector("#ingresoYear")

 
let resultado = {};



/** 
 * !procedimiento dia  
 * */
function ingresoValorDia () {
        const ingresoDia = parseInt(inputDia.value);
        if (!isNaN(ingresoDia)) {
            console.log(ingresoDia);
            resultado.dia = fechaHoy.dia - ingresoDia;
            console.log(resultado.dia);
        }
}

if (inputDia) {
    inputDia.addEventListener('change', ingresoValorDia) //leer el valor actualizado
}
/** 
 * !fin dia  
 * */
/** 
 * !procedimiento mes  
 * */

const ingresoMes =0;
function ingresoValorMes () {
    const ingresoMes = parseInt(inputMes.value);
    if (!isNaN(ingresoMes)) {
        console.log(ingresoMes);
        resultado.mes = fechaHoy.mes - ingresoMes;
        console.log(resultado.mes);

    }
}


if (inputMes) {
    inputMes.addEventListener('change', ingresoValorMes)
}
/** 
 * !fin mes
 * */

/** 
 * !procedimiento year  
 * */
function ingresoValorYear () {
    const ingresoYear = parseInt(inputYear.value);
    if (!isNaN(ingresoYear)) {
        console.log(ingresoYear);
        resultado.year = fechaHoy.year - ingresoYear;
        console.log(resultado.year);
    }
}


if (inputMes) {
    inputYear.addEventListener('change', ingresoValorYear)
}
/** 
 * !fin mes
 * */



/** 
 * !fecha de la ventana de win en el navegador 
 * */
const fechaHoy = new Date();

let fechaProcesada = {
    

} 
function formatoFechaHoy (fechaHoy) {
    fechaHoy.dia= fechaHoy.getDate();
    fechaHoy.mes= fechaHoy.getMonth()+1;
    fechaHoy.year= fechaHoy.getFullYear();

}
formatoFechaHoy(fechaHoy)




/** 
 * !operaciones 
 * */

function ajuste () {
    Object.keys(resultado).length == 3
    ? console.log("tiene 3")
    : console.log("no tiene 3")
}