# TALLERES DE REPOSO DE JAVASCRIPT
>[!WARNING] observacion: Quokka se debe ejecutar en cada archivo.
>[!TIP] Quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver las consola en vivo

## 1. TIPOS DE DATOS.
en javascript se clasifican en dos grandes grupos
>[!TIP] Javacript tiene funciones predeterminadas por ejemplo para mostrar un mensaje por consola `console.log()`,
para poder verificar que tipo de dato estamos manejando en javascript tambien tenemos una funcion por defecto llamada
`typeof`
### ORIMITIVOS
son datos que siempre existiran.
1. NUMERICOS.
  - enteros positivos
  - enteros negativos
  - decimal positvo
  - decimal negativo
  - NaN (not a number)
2. TEXTO
  - caracteres
  - caracteres especiales
  - string
3. BOOLEANOS
  - true   - 1
  - false  - 0
### ESTRUCTURADOS 
1. ARRAY (LISTA)
   - array de tipo numerico.
   - array de tipo string.
   - array de tipo mixto.
2. OBJETOS (DICCIONARIO)
   son similares a las listas con la unica diferencia que en vez de tener valor e indice sus elementos trabajan
   con clave:valor
   - como esta estructurado en un objeto de javascript.
## 2. VARIABLES (enlaces, binding).
es la tecnica que se usa para poder apuntar a una dirección en memoria y al valor o datos relacionados o que se
encuentre almacenado en ese momento.
tenemos dos pasos para crear una variable 
1. primero declarar la variable/constante.
2. segundo inicializar la variable/constante.
**OBSERVACION** para crear una variable primero tenemos que crear el enlace luego darle el nombre de la variable
/constante: `Keyword`,`let`,`var`,`Keyword` - `const`.
**RECOMENDACIONES**
- `let` usar cuando el valor tendraque variar.
- `const` usar cuando el valor sera el mismo siempre.
- `var` evitar usar.
`let`,`var` ambos nos permiten crear variable su unica diferencia es el alcance ambito o `scope`(averigaur)
## 3. OPERADORES.
su clasificacion general se divide en tres.
1. OPERADORES UNARIOS.
   Los operadores unarios son aquellos que estan ubicados a la izquierda del valor y que retornan un nuevo valor.
   - operacion de negacion
2. OPERADORES BINARIOS.
   los operadores binarios son aquellos que estan en medio de dos valores y retornan un unico valor.
   - operaciones aritmeticos.
   - operadores de compracion.
   - operadores logicos.
3. OPERADORES TERNARIOS.
   los operadores ternarios son aquellos que evaluan tres valores y que retornan un solo valor.
   - operador condicional.
## 4. CONTROLES DE FLUJO.
nuestros progrmas en javascript contienen mas de una sentencia y las sentencias son ejecutadas una a una como si
fuera una historia, de arriba havia abajo como un camino recto.
javascript nos permite crear caminos alternativos en nuestros programas dependiendo de una decision a esto se le 
conoce como caminos o ejecucion condicional, que ejecutara una sentencia u otras teniendo encuenta la condicion
asi podemos crear multiples caminos u opciones en nuestro programas.
si tenemos una condicion verdadera se ejecutara una sentencia si tenemos una condicion false se ejecutara otra
sentencia totalmente distinta.
**OBSERVACION** la ejecucion condicional rompe el flujo normal de un programa.
### 1.CONTROLES DE DECISION(IF-ELSE)
tarea con sus ejemplos
### 2.BLUCLES(FOR)
### 3.BLUCLES(WHILE)

## 5.FUNCIONES.
la funciones en javascrip son bloques de codigo que se ejecutan de manera independiente, podemos decir tambien que 
son programas que toman datos como entra y retornan otros datos como salida.
las funcione son fundamentales para el correcto ordenamiento denuestro codigo ademas que nos permkiten separar de una
manera mas ordenada muestra logica y evitar repartir el codigo muchas veces.
### TIPOS DE FUNCIONES:
#### 1. FUNCIONES POR DECLARACION
este tipo de funcion es la mas conocida y mas usada su estructura es la siguiente:

### TAREA:
### FUNCIONES POR EXPRESION:
Una función por expresión es una función que se define como una expresión y se asigna a una variable. Se utiliza la palabra clave function seguida de los parámetros y el cuerpo de la función.
const suma = function(a, b) {
  return a + b;
};

console.log(suma(2, 3)); // Salida: 5
### FUNCIONES DE FECHA (ARROW FUNCTION)
Las funciones de flecha son una forma más concisa de definir funciones en JavaScript. Utilizan la sintaxis => para separar los parámetros del cuerpo de la función.
const suma = (a, b) => {
  return a + b;
};

console.log(suma(2, 3)); // Salida: 5
Si la función solo tiene una línea de código, puedes omitir las llaves y la palabra clave return:
const suma = (a, b) => a + b;

console.log(suma(2, 3)); // Salida: 5
Las funciones de flecha también tienen algunas diferencias en cuanto al contexto de this, que puede ser beneficioso en ciertas situaciones.
## 6. METODOS PAARA TRABAJAR CON DATOS ESTRUCTURADOS
los metodos son funciones que dan funcionalidades extras a los tipos de datos en los cuales se aplican, un metodo es antesedido
por un tipo de dato y un punto.
**ejemplo**
el ejemplo mas claro de un metodo es el `.lengt` - este metodo nos permite o nos retorna la cantidad de caracteres de un string
o la cantidad de elementos de una lista.
```js
"hola".length //4
[2,5,4,6,7].length //5
```
>[!TIP] los metodos en su mayoria solo se aplican a tipo de datos string, listas y objetos, en su gran parte son aplicadospara listas.
### 6.1 METODOS PARA STRING - CADENAS DE TEXTO
#### LENGTH
devuelve la longitud de una cadena
```js
let mensaje="hola como estas"
console.log(mensaje.lenght)
//retorna -> 15
```
#### TOLOWERCASE
devuelve una cadena en minuscula
```js
let texto="hola"
console.log(texto.tolowercase())
// retorna -> hola
```
#### TOUPPERCASE
devuelve una  cadena en mayusculas
```js
let texto="hola"
console.log(texto.toUpperCase())
// retorna -> HOLA
```
#### CONCAT 
combina el texto de dos o mas cadenas
```js
let nombre="kcapa"
let saludo="hola"
//let concatenado=nombre+saludo
console.log(saludo.concat(nombre))

let cad1="oh "
let cad2="me "
let cad3="vengo"
console.log(cad1.concat(cad2,cad3))
//retorna -> oh me vengo
```
### TRIM
este metodo elimina los espacios que existen al inicio o final de una cadena o texto.
```js
let texto="   hola"
let nuevotexto=texto.trim() //hola
let otrotexto="hola   "
let nuevoOtrotexto=otrotexto.trim()//hola
```
#### SLICE - CORTE
este metodo nos permite extraer partes de una cadena, especificando sus indices, donde
comenzar y hasta donde mostrar.
```js
let parrafo="hola soy percy"
//solo quiero que me muestre percy
let nombre=parrafo.slice(9)//percy
let soy=parrafo.slice(5,8)//soy
```
#### SPLIT
este metodo retorna una lista basandose en un separador que se le indique.
```js
let parrafo="solo se que nada se"
parrafo.split("")//["solo","se","que","nada","se"]
let url="google.com/search?=gatitos"
url.split("=")//["google.com/search?","gatitos"]
console.log(gatito[1])//gatitos
let listaFrutas="manzana,tomate,pera,naranja"
listaFrutas.split(",")
```
### 6.2 METODOS PARA LISTA - ARRAYS
#### CREAR UNA LISTA 
```js
let lista=[]
```
#### AGREGA ELEMENTOS AL FINAL DE UNA LISTA
```js
lista[0]="manzana"
```
#### PUSH
el metodo `push` agrega elemento al final de una lista
```js
let lista=[]
lista.push("manzana")
```
#### UNSHIFT
el metodo `unshift` agrega elementos al inicio de una lista
```js
let amigos=[`rony`,`lisbet`,`josema`]
amigos.unshift("ronald")
// retorna[""ronald","rony","lisbet","josema"]
```
#### REMOVIENDO ELEMENTOS DE UNA LISTA
#### POP
el metodo `pop` al contrario de push extrae el ultimo elemento de una lista.
#### SHIFT
el metodo `shift` al contrario de unshift extrae al primer elemento de una lista.
#### ELIMINA ELEMENTOS DE UNA LISTA
#### DELETE
elimina un elemento en base a su indice
```js
let texto=["hola","como","","estas"]
delete texto[2]
```
#### SPLICE
este metodo elimina el elemento en base a su indice y a la cantidad de elementos a eliminar
```js
let vocals=['a','e','e',i','o','u']
vacals.splice(2,1)
vacals array
```
####  COMBINANDO O UNIENDO LISTAS (ARRAYS)
#### CONCAT
este metodo crea un nuevo array que contiene los elementos del array original siguiendo por los elemementos de uno o mas array proporcionados.
```js
let amigosPrimaria=['alfredo','luis','edgar']
let amigosSecundaria=['edison','remy','miguel']
let amigosSuperior=['josue','marion','handy']
let amigos=amigosPrimaria.concat(amigosSecundaria,amigosSuperior)
```
#### METODOS PARA ITERAR ELEMENTOS
#### FOREACH
Este metodo ejecuta una funcion anonima por cada elemento de un array.
```js
let numero=[1,2,3,4,5,6]
numeros,forEach(n=>console.log(n+1))
```
### MAP
este metodo ejecuta una funcion anonima por cada elemento de array, generando una nueva lista.
```js
let numeros=[1,2,3,4,5,6]
let nuevosNumeros.map(n=>{return n+1})
```
#### METODOS PARA BUSCAR ELEMENTOS EN UNA LISTA.
#### INCLUDES
este metodo busca un valor en especifico y devuelve un valor booleano en caso de encontrar el valor buscado retorna true caso contrario false.
```js
let vocales=['a','i','o','u']
let buscaE=vocales.includes('e')
// retorna false
let buscaA=vocales.includes('a')
// retorna true
```
#### FILTER
este metodo se usa para encontrar elementos dentro de una lista que cumplan con cierta condicion.
```js
let numero=[2,4,5,7,8,1,2,6]
// deseo una lista con los numeros que sean menor a 4
let nuevosNumeros=numeros.filter(n=>{n<4})
```
#### FIND
Este metodo se usa para encontrar el primer elemento que cumpla con cierta condicion, a diferencia deñ `filter` solo retorna un elemento el que conincida con la condicion.
```js
let lisNumeros=[10,11,3,20,5]
//devolver el numero mayor a 10
let menorDiez=lisNumero.find(n=>{return n>10})
console.log(menorDiez)
// retorna 11 - al primer elemento que coincide con la condicion
```
### 6.3 METODOS PARA OBJETOS.
#### CREANDO OBJETOS
```JS
// objeto de diccionario vacio
let objeto={}
```
#### AGREGANDO ELEMENTOS DE UN OBJETO
recuerden que el elemento de un objeto esta conformado por `clave`:`valor`
```js
objeto["nombre"]="ruth"
objeto["edad"]=18
objeto["cui"]=08674523
```
#### ACTUALIZANDO ELEMENTOS DE NUESTRO OBJETO
para realizar la actualizacion del valor de un elemento tenemos que acceder a travez de su clave y asignarle el nuevo valor.
**observacion** la clave debe ser la misma a actualizar de no existir creara una nueva
```js
objeto["edad"]=20
```
#### ELIMINANDO UN ELEMENTO DE NUESTRO OBJETO
para eliminar un elemento de un objeto hacemos uso de un operador unario `delete`
```js
delete objeto.CUI
```
## 7. ES6
### ARROW FUNCTION
### DESTRUCTURIN
este es una tecnica para el desempaquetado de lista o objetos en variables, esta tecnica facilita el acceso a los elementos de una lista u objetos.
```js
let alumno={
  "nombre":"miguel"
  "edad":"17"
}
console.log(alumno.nombre)
console.log(alumno("edad"))
//destructuracion
let {nombre,edad}=alumno
```
## 8. DOM