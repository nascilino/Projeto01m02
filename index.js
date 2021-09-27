
const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "pronto.png";
    elementoNome.innerText = "Seiya de Pégasos";
    elementoSituacao.innerText = "Pronto para briga ";
    elementoBtn.value = "segundo";
} else if (elementoBtn.value == "segundo") {
    elementoImg.src = "socando.png";
    elementoNome.innerText = "ate que enfim batendo ";
    elementoSituacao.innerText = "cara de mal";
    elementoBtn.value = "terceiro";
} else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "apa1.png";
    elementoNome.innerText = "apanhando";
    elementoSituacao.innerText = "sofrendo";
    elementoBtn.value = "quarto";
  } else if (elementoBtn.value == "quarto") {
    elementoImg.src = "derotado1.png";
    elementoNome.innerText = "Seya sem o couro ";
    elementoSituacao.innerText = "a cara da derrota";
    elementoBtn.value = "quinto";
  } else {
    elementoImg.src = "prep2.png";
    elementoNome.innerText = "Seya Preparando";
    elementoSituacao.innerText = "Preparando para batalhar";
    elementoBtn.value = "primeiro";
  }
});
