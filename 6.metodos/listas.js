let lista=[]
lista[0]="manzanas"
lista[1]="pera"
console.log(lista.length)
console.log(lista)

//1. crear una lista vacia y agregar de manera automatica los numeros pares que existen entre 0 y 20

let numerosPares = [];
for (let i = 2; i <= 20; i += 2) {
    numerosPares[numerosPares.length] = i;
}
console.log(numerosPares);


let amigos=['a','e','o']
amigos.unshift('a') //agrega al inicio
amigos.push('u') // agrega al final
amigos 

let frutas=['manazana','piña','sandia','pera','platano','cereza']
let cereza=frutas.pop()
cereza
frutas

let texto=["hola","como"," ","estas"]
delete texto[2]
texto


let vocals=['a','e','e','i','o','u']
vocals.splice(2,1)
vocals



let amigosPrimaria=['alfredo','luis','edgar']
let amigosSecundaria=['edison','remy','miguel']
let amigosSuperior=['josue','marion','handy']
let friends=amigosPrimaria.concat(amigosSecundaria,amigosSuperior)
friends