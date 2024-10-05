let listasNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag); 
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirmensagemInicial(){
exibirTextoNaTela ('h1', 'JOGO DO NÚMERO SECRETO');
exibirTextoNaTela ('p', 'escolha um número entre 1 e 10');
}

exibirmensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'ACERTOU');

        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativa = (`você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        
        exibirTextoNaTela ('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute>numeroSecreto)  {
            exibirTextoNaTela ('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'o número secreto é maior.')
        }

        tentativas++;
        limparCampo ();
    }
}
function gerarNumeroAleatorio () {
  let numeroEscolhido = parseInt ( Math.random() *numerolimite+1);
  let quantidadeDeElementosDaLista = listasNumerosSorteados.length;
if (quantidadeDeElementosDaLista == numerolimite) {
    listasNumerosSorteados = []; 
}

  if (listasNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio ();
  } else {
    listasNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}