// estructura de una condicion 
//1.palabra reservada if
//2.la  condicion o expresion a evaluar (que debera ser siempre un tipo de dato booleano), la expresion y condicion debera estar entre()
//3.el cuerpo, que contrenda el codigo a ejecutar en caso la condicion sea verdadera

//4.palabra reservada else.
//5.cuerpo, que contendran el codigo a ejecutra en caso la codicion sea fals

if (true){
    let suma=24+45
    let divi=45/3
    console.log(suma,divi) [ 69, 15 ]
}else{
    console.log("me ejecuto por que soy flaso") 
}
console.log(divi) 15

//crear un  programa que evalue si un numero es mayor al otro y si este numero es a la vez un numero par
 let firtsNumber=25
 let secondNunber=30

 if (firtsNumber>secondNunber){
    if (firtsNumber%2 == 0){
        console.log("el numero es mayor pero es impar")
    }
 }else{
    console.log("el numero es menor") 
 }
    tarea:
    //crear un programa que me muestre el numero en texto.

    function convertirNumeroATexto(numero) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const especiales = ["", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    
    if (numero === 0) {
        return "cero";
    }

    let texto = "";

    if (numero >= 10 && numero < 20) {
        texto = especiales[numero - 10];
    } else {
        const decena = Math.floor(numero / 10);
        const unidad = numero % 10;

        if (decena > 0) {
            texto = decenas[decena];
        }

        if (unidad > 0) {
            if (decena > 0) {
                texto += " y ";
            }
            texto += unidades[unidad];
        }
    }

    return texto;
}

// Ejemplo de uso
const numero = 27;  // Puedes cambiar este número a cualquier otro
console.log(El número ${numero} en texto es: "${convertirNumeroATexto(numero)}");

// RESOLUCUON DEL DOCNETE
 let numero=3
 if (numero==1){
    comsole.log("uno")
 }
 else if (numero==2){
    console.log("dos")
 }
 else if (numero==3){
    console.log("tres") `tres`
 }
 else if (numero==4){
    console.log("cuatro")
 }
 else if (numero==5){
    console.log("cinco")
 }
 switch (numero) {
    case 1:
        console.log("uno")
        break
    case 2:
        console.log("dos")
        break
    case 3:
        console-log("tres")
        break
    default:
        console.log("fuerra de rango") `fuera de rango`
        break
 }