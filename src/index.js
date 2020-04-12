import cipher from './cipher.js'

let cifrar = document.getElementById("cifrar")
let descifrar = document.getElementById("descifrar")
let strat = document.getElementById("start")
let voltar = document.getElementById("voltar")
let page1 = document.getElementById("page01")
let page2 = document.getElementById("page02")
let boxMensagem = document.getElementById("boxMensagem")
let offset = document.getElementById("offset")

cifrar.onclick = function(){
    document.getElementById("cifrar").value;
    document.getElementById("boxMensagem").innerHTML = cipher.encode(offset.value, boxMensagem.value)
}
console.log(cipher);
