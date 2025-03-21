
let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1)) + 1
console.log(`Nº secreto ${numeroSecreto}`)

// selecionando elementos
let cxInputNumber = document.querySelector('#inputNumero')
let btnChutar     = document.querySelector('#btnChutar')
let aviso         = document.querySelector('#aviso')

// musica
let musica = document.querySelector('#musicaDeFundo')

// validação de dado
cxInputNumber.addEventListener('blur',function(){
    let validaInput = Number(cxInputNumber.value)
    console.log(`valor escolhido no input foi ${validaInput}`)

    if(validaInput <= 0 || validaInput > 10){
        aviso.textContent = 'escolha valor entre 1 e 10'
        aviso.classList.add('errou')
    }

    setTimeout(function(){
        aviso.textContent = ''
        aviso.classList.remove('errou')
        cxInputNumber.value = ''
    },4000)
})

// jogar
btnChutar.addEventListener('click',function(){
    let numeroEscolhido = Number(cxInputNumber.value)
    if(numeroEscolhido === numeroSecreto){
        aviso.textContent = 'Parabens você acertou o numero secreto!'
        aviso.classList.add('acertou')

        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('acertou')
            gameOver()
        },4000)
    }
    if(numeroEscolhido <= 10 && numeroEscolhido > 0 && numeroSecreto <= 10 && numeroSecreto > 0){
        if(numeroSecreto > numeroEscolhido){
            aviso.textContent = `O numero secreto é Maior que ${numeroEscolhido}`
            aviso.classList.add('validacao')
        }
        else if (numeroSecreto < numeroEscolhido){
            aviso.textContent = `O número secreto é Menor que ${numeroEscolhido}`
            aviso.classList.add('validacao')
        }
    }

    //  if(numeroEscolhido !== numeroSecreto){
        
    // else if(numeroEscolhido !== numeroSecreto){
    //     aviso.textContent = 'Você não acertou o número secreto :('
    //     aviso.classList.add('errou')
    // }

    setTimeout(function(){
        aviso.textContent = ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        aviso.classList.remove('validacao')
    },4000)
})

// funcao gameOver atualiza a pagina pra um novo nº secreto
function gameOver(){
    return window.location.reload(true)
}

// manipulação de musica
function tocarMusicaDeFundo(){
    musica.play();
}

function ativarDesativarMusica(){
    if(musica.muted){
        musica.muted = false;
    } else {
        musica.muted = true;
    }
}

function pausarMusicaDeFundo(){
    musica.pause();
    musica.currentTime = 0;
}

