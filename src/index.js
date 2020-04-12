import cipher from './cipher.js'

let cifrar = document.getElementById("cifrar")
let descifrar = document.getElementById("descifrar")
let strat = document.getElementById("start")
let voltar = document.getElementById("voltar")
let page1 = document.getElementById("page01")
let page2 = document.getElementById("page02")
let boxMensagem = document.getElementById("boxMensagem")
let offset = document.getElementById("offset")
let result = document.getElementById("result")

strat.onclick = function(){
    page1.style.display = "none"
    page2.style.display = "flex"

}

voltar.onclick = function(){
    page1.style.display = "flex"
    page2.style.display = "none"

}


cifrar.onclick = function(){
    if (boxMensagem == "" || offset.value== "") {
        alert("Verifique se inseriu a mensagem e o valor de deslocamento");

    } else {
        document.getElementById("result").innerHTML = cipher.encode (offset.value, boxMensagem.value);
        result.style.display = "block"
    }
}
descifrar.onclick = function(){
    if (boxMensagem == "" || offset.value == "") {
        alert("Verifique se inseriu a mensagem e o valor de deslocamento");
        

    } else {
        document.getElementById("result").innerHTML = cipher.decode (offset.value, boxMensagem.value);
        result.style.display = "block"
        
    }
}
console.log(cipher);
