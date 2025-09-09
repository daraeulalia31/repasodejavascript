/*
sintaxys de for
primero el keyword, condicion, expresion, cuerpo
partes de la condicion - expresion inicial.
condicion, expresion final
*/
// suma normal inical=inicial+1
// incrememto incial++
// inicial+=1
for (let inicial=1;inicial<10;inicial++){
  console.log("hola")
}
// for es usado para acceder o recorrer(iterar) los elementos de una lista o diccionario

let amigos=['alex','ruth','jose','willian']
console.log(amigos)
console.log(amigos[3])
//existe un metodo para saber la cantidad de elementos que tiene una lista length
console.log(amigos.lengt)
// para acceder al ultimo elemento podemos hacer uso del metodod length y restarle 1.
console.log(amigos[amigos.length -1])

// ejercisio recorrer o iterar la lista de amigos con for
console.log(amigos[0])
console.log(amigos[1])
console.log(amigos[2])
console.log(amigos[3])
for(let i=0;i<=3;i++){
    console.log(amigos[i])
}
 let frutas=['manzana','piña','sandia','pera','platano','cereza']
 console.log(frutas[frutas.length-3])
 for (let i=frutas.lenght-3; i<frutas.length; i++){
    console.log(frutas[i])
 }
 for (let i=0;i<frutas.length;i++){
    if(frutas[i]=='manzana')||frutas[i]=='pera'{
        console.log(frutas[i])
    }
 }
  