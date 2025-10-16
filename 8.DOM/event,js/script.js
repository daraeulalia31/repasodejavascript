const buttonFuncExterna=document.querySelector("#funcion_externa")
buttonFuncExterna.addEventListener("click",funcionExterna)
function funcionExterna(){
    alert("estoy ejecutandomeeee! desde una funcion externa")
}

const buttonFuncCallback=document.querySelector("#funcion_callback")
buttonFuncCallback.addEventListener("click",()=>{
alert("estoy ejecutandomeeee! desde un callback con una arrow function")
})