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


const miFuncion=a=>{}
let numeros=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n*2)})


let number=[1,2,3,4,5,6]
let nuewNumber=number.map(n=>{return n+1})
console.log(nuewNumber)


let fruits=[pera,higo,tomate]
let estaPera=fruits.includes(pera)
console.log(estaPera)
let estaNaranja=fruits.includes(naranja)
console.log(estaNaranja) 


let listNumber=[10,11,3,20,5]
// obtener en una lista los numeros mayores a 10
let mayorDiez=listNumber.filter(n=>{return n>10})
console.log(mayorDiez) [11,20]

// de una lista numeros del 1 a 10 usando filter eliminar el numero 1
let unoAlDiez=[1,2,3,4,5,6,7,8,9,10]
let listaSinUno=unoAlDiez.filter(n=>{return n!=1})
console.log(listaSinUno) 