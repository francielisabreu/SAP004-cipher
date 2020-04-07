import cipher from './cipher.js';

let btnStart = document.getElementById("start")
let page01 = document.getElementById("page01")
let page02 = document.getElementById("page02")
let btnVoltar = document.getElementById("voltar")


btnStart.onclick = function(){
    page01.style.display = "none"
    page02.style.display = "block"
}

btnVoltar.onclick = function(){
    page01.style.display = "flex"
    page02.style.display = "none"
}

console.log(cipher);
