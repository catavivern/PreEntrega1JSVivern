//Actualizacion de precios de enero/2023
let precioMaizPorTonelada = 456 //USD
let precioSojaPorTonelada = 318 //USD
let precioSorgoPorTonelada = 304 //USD
let precioDolarEnPesos = 356 //1USD = 356pesos

const impuestosAlCampo = 61.3

/*function precioConImpuesto(precioSinImpuesto){
    return (precioSinImpuesto + ((precioSinImpuesto * impuestosAlCampo)/100));
}*/

//la funcion en version arrow function
const precioConImpuesto = precioSinImpuesto => (precioSinImpuesto * impuestosAlCampo)/100

const convertirAPesos = precioEnDolares => precioEnDolares * precioDolarEnPesos

let dato = prompt("Ingrese la cantidad de dolares que quiere convertir. Para salir ingrese ESC.")

function mostrarConvertirAPesos(dato){
while (dato !="ESC"){
    parseFloat(dato);
    datoConvertido=convertirAPesos(dato);
    console.log(dato+"dolares son " +datoConvertido + " pesos")
}
}

mostrarConvertirAPesos(dato)

function elegirGrano(grano){
    if( grano == "maiz");
    console.log("Usted ha elegido maiz");
    if( grano == "soja");
    console.log("Usted ha elegido soja");}

