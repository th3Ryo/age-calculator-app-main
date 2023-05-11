const inputDia = document.querySelector("#ingresoDia")
const inputMes = document.querySelector("#ingresoMes")
const inputYear = document.querySelector("#ingresoYear")
const divIngresoDia = document.querySelector('.ingresoFecha.dia');
const divIngresoMes = document.querySelector('.ingresoFecha.mes');
const divIngresoYear = document.querySelector('.ingresoFecha.year');

 
let resultado = {
    /* dia : 1,
    mes : 1,
    year : 1992, */
};
/** 
 * !escuchar si hay elementos vacios 
 * */
function vacio () {
    if (divIngresoDia.value==undefined) {

    if (inputDia.value === '' && inputMes.value === '' && inputYear.value === '') {
        const pElement = document.querySelector('.ingresoFecha.dia p');
        if (!pElement) {
            const pAlertaDia = document.createElement('p');
            pAlertaDia.innerText = "this fields is required"
            divIngresoDia.appendChild(pAlertaDia);
            
            // agregar lo rojo
            divIngresoDia.classList.add('alerta')
            inputDia.classList.add('alertaBorde')
            divIngresoMes.classList.add('alerta')
            inputMes.classList.add('alertaBorde')
            divIngresoYear.classList.add('alerta')
            inputYear.classList.add('alertaBorde')

        }


        /* const pElement = document.createElement('p');
        pElement.textContent = '"this fields is required"';
        
        const diaContainer = document.querySelector('.ingresoFecha.dia');
        diaContainer.appendChild(pElement); */
    }
    }
}
/**  
 * !la unica funcion del blur es actual despues del clikc en otra parte */
inputDia.addEventListener('blur', vacio)
inputMes.addEventListener('blur', vacio)
inputYear.addEventListener('blur', vacio)




/** 
 * !procedimiento dia  
 * */
function ingresoValorDia () {
        const ingresoDia = parseInt(inputDia.value);
        const pElement = document.querySelector('.ingresoFecha.dia p');

        if (!isNaN(ingresoDia) && ingresoDia>0 && ingresoDia < 32) {
            
                //resta de dia actual - dia nacimiento 
                resultado.dia = fechaHoy.dia - ingresoDia;

                //eliminar clase
                divIngresoDia.classList.remove('alerta')
                inputDia.classList.remove('alertaBorde')
                

                //agregar clase solo si existe
                if (pElement) {
                pElement.classList.add('oculto')
                }
            }
        else {
                console.log = ("no valido")
                 /** 
                * !agregar las alertas 
                * */
                
                if (divIngresoDia) {
                    //verificacion elemento p existe

                    if (!pElement) {
                        const pAlertaDia = document.createElement('p');
                        pAlertaDia.innerText = "Must be a valid day"
                        divIngresoDia.appendChild(pAlertaDia);
                    }
                }
                //agregar clase

                divIngresoDia.classList.add('alerta')
                inputDia.classList.add('alertaBorde')
                //eliminar clase solo si existe
                if (pElement) {
                pElement.classList.remove('oculto')
                }
            }
            
        ajuste()
        
}

if (inputDia) {
    inputDia.addEventListener('change', ingresoValorDia) //leer el valor actualizado
}
if (inputDia.value==='') {
    console.log("entro esta monda")
    /* inputDia.addEventListener('change', ingresoValorDia) //leer el valor actualizado */
}


/** 
 * !fin dia  
 * */
/** 
 * !procedimiento mes  
 * */


function ingresoValorMes () {
    const ingresoMes = parseInt(inputMes.value);
    const pElement = document.querySelector('.ingresoFecha.mes p');
    if (!isNaN(ingresoMes) && ingresoMes > 0 && ingresoMes < 13 ) {
        //resta de mes actual - mes nacimiento 
        resultado.mes = fechaHoy.mes - ingresoMes;
        //eliminar clase
        divIngresoMes.classList.remove('alerta')
        inputMes.classList.remove('alertaBorde')
        

        //agregar clase solo si existe
        if(pElement) {
        pElement.classList.add('oculto')
        }
    } else {
        console.log = ("no valido")
        if (divIngresoMes) {
            //verificacion elemento p existe

            if (!pElement) {
                const pAlertaMes = document.createElement('p');
                pAlertaMes.innerText = "Must be a valid month"
                divIngresoMes.appendChild(pAlertaMes);
            }
        }
        //agregar clase

        divIngresoMes.classList.add('alerta')
        inputMes.classList.add('alertaBorde')
       //eliminar clase solo si existe
       if (pElement) {
        pElement.classList.remove('oculto')
       }
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
    const pElement = document.querySelector('.ingresoFecha.year p');
    //el segundo && corresponde a verificar que el año de ingreso sea menor que la fecha ingresada
    if (!isNaN(ingresoYear)&& fechaHoy.year>ingresoYear) {
        //resta de año actual - año nacimiento 
        resultado.year = fechaHoy.year - ingresoYear;
        //eliminar clase
        divIngresoYear.classList.remove('alerta')
        inputYear.classList.remove('alertaBorde')
        

        //agregar clase solo si existe
        if(pElement) {
        pElement.classList.add('oculto')
        }

    } else {
        console.log = ("no valido")
        if (divIngresoYear) {
            //verificacion elemento p existe

            if (!pElement) {
                const pAlertaYear= document.createElement('p');
                pAlertaYear.innerText = "Must be in the past"
                divIngresoYear.appendChild(pAlertaYear);
            }
        }
        //agregar clase

        divIngresoYear.classList.add('alerta')
        inputYear.classList.add('alertaBorde')
        //eliminar clase solo si existe
        if (pElement) {
        pElement.classList.remove('oculto')
        }
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
        /** 
        * !organizar fechas 
        * */
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
        console.log("no hace nada");
        }
        /** 
        * !cambiar textos de resultados 
        * */
        
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
  

