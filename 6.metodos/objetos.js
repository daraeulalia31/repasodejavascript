let objeto={}
// ojasasoooo: si la clave no existe lo crea
// si la clave existe entonces actualiza el valor
objeto["nombre"]="ruth"
objeto["nombre"]="jose"
objeto["edad"]=20

//notacion de tipo punto
console.log(objeto.nombre)
//notacion de tipo llave
console.log(objeto["nombre"])
console.log(objeto)
delete objeto.edad
console.log(objeto)