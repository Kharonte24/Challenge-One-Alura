function encriptar() {
  var deco = document.getElementById("text-1").value;
  deco = deco
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  document.getElementById("text-2").value = deco;
};
var button = document.getElementById("btnEncriptor");
button.onclick = function () {    
    if(document.getElementById("text-1").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};

function desencriptar() {
  var undeco = document.querySelector("#text-1").value;
  undeco = undeco
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  document.getElementById("text-2").value = undeco;
};
var button = document.getElementById("btnDesencriptor");
button.onclick = function () {
    if(document.getElementById("text-1").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};

function copy() {
  navigator.clipboard.writeText(
      document.getElementById("text-2").value
  );
}
document.querySelector("#btn-copiar").addEventListener("click", copy);