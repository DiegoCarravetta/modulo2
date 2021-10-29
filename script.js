const botaoHumor = document.querySelector("#botao-humor"); // Captura o botão no DOM pelo id
const nomeHumor = document.querySelector('#nome-do-humor');
const descricaoHumor = document.querySelector('#descricao-do-humor');
const imagemHumor = document.querySelector('#imagem-do-humor');

botaoHumor.addEventListener("click", function () { // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  if (botaoHumor.value == `inicial`) {
    imagemHumor.src = `medo.png`
    nomeHumor.innerText = `Medo`
    descricaoHumor.innerText = `Vai com medo mesmo!`
    botaoHumor.value = `medo`
  } else if (botaoHumor.value == `medo`) {
    imagemHumor.src = `nojinho.png`
    nomeHumor.innerText = `Nojinho`
    descricaoHumor.innerText = `ULE! tanana... ULE!`
    botaoHumor.value = `nojinho`
  } else if (botaoHumor.value == `nojinho`) {
    imagemHumor.src = `raiva.png`
    nomeHumor.innerText = `Raiva`
    descricaoHumor.innerText = `Que ódiooooooooo!`
    botaoHumor.value = `raiva`
  } else {
    imagemHumor.src = `tristeza.png`
    nomeHumor.innerText = `Tristeza`
    descricaoHumor.innerText = `Nenhum sentimento é para sempre... Nenhum!`
    botaoHumor.value = `inicial`
  }
});