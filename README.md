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
## 7. METODOS PAARA TRABAJAR CON DATOS ESTRUCTURADOS
### ACCEDER
### MODIFICAR
### CREAR 
### INSERTAR
### ELIMINAR
### ORDENAR 