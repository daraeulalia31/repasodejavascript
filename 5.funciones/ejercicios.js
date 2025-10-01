// crear una funcion que reciba por parametro una lista y un elemento a encontrar retornar si el elemento fue encontrado o no

function buscaElemento(lista,el){
    let mensaje=""
    for (let i=0;i<lista.length;i++){
        if(lista[i]==el){
            mensaje="elemento encontrado"
            return mensaje
        }
    }
    mensaje="elemento no encontrado"
    return mensaje
}
let amigos=["ashly","alex","angel","ana"]
console.log(buscaElemento(amigos,"kcapa"))
