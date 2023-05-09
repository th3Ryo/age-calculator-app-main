const inputDia = document.querySelector("#ingresoDia")
const inputMes = document.querySelector("#ingresoMes")
const inputYear = document.querySelector("#ingresoYear")

 
let resultado = {
    /* dia : 1,
    mes : 1,
    year : 1992, */
};



/** 
 * !procedimiento dia  
 * */
function ingresoValorDia () {
        const ingresoDia = parseInt(inputDia.value);
        if (!isNaN(ingresoDia) && ingresoDia>0 && ingresoDia < 32) {
            
                //resta de dia actual - dia nacimiento 
                resultado.dia = fechaHoy.dia - ingresoDia;
            }
        else {
                console.log = ("no valido")
            }
        ajuste()
        
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
    if (!isNaN(ingresoMes) && ingresoMes > 0 && ingresoMes < 13 ) {
        //resta de mes actual - mes nacimiento 
        resultado.mes = fechaHoy.mes - ingresoMes;
    } else {
        console.log = ("no valido")
    }
    ajuste()
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
    //el segundo && corresponde a verificar que el año de ingreso sea menor que la fecha ingresada
    if (!isNaN(ingresoYear)&& fechaHoy.year>ingresoYear) {
        //resta de año actual - año nacimiento 
        resultado.year = fechaHoy.year - ingresoYear;
    } else {
        console.log = ("no valido")
    }
    ajuste()
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

function ajuste() {
    let tamañoFecha = Object.keys(resultado).length;
    if (tamañoFecha == 3) {
        
        // verificar queconsole.log("tiene 3");
        // en caso que los dias sean negativos
        if (resultado.dia < 0) {
        resultado.dia += 30;
        resultado.mes -= 1;
        }
        // en caso que los dias sean negativos
        if (resultado.mes < 0) {
        resultado.mes += 12;
        resultado.year -= 1;
        }
        // en caso que los dias sean negativos
        if (resultado.year < 0) {
        console.log("no es hace nada");
        }

        //cambiar textos de resultados
        const pValorDia = document.querySelector('.diaResultado p');
        if (pValorDia) {
        pValorDia.innerText  = resultado.dia ;
        }
        const pValorMes = document.querySelector('.mesResultado p');
        if (pValorMes) {
        pValorMes.innerText  = resultado.mes ;
        }
        const pValoryear = document.querySelector('.yearResultado p');
        if (pValoryear) {
        pValoryear.innerText  = resultado.year ;
        }

    } 
  }
  /** 
 * !operaciones 
 * */
  

