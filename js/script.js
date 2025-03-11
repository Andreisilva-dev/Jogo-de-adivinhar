
let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1)) + 1
console.log(`Nº secreto ${numeroSecreto}`)

// selecionando elementos
let cxInputNumber = document.querySelector('#inputNumero')
let btnChutar     = document.querySelector('#btnChutar')
let aviso         = document.querySelector('#aviso')

// validação de dado
cxInputNumber.addEventListener('blur',function(){
    let validaInput = Number(cxInputNumber.value)
    console.log(`valor escolhido no input foi ${validaInput}`)

    if(validaInput <= 0 || validaInput > 10){
        aviso.textContent = 'escolha valor entre 1 e 10'
        aviso.classList.add('validacao')
    }

    setTimeout(function(){
        aviso.textContent = ''
        aviso.classList.remove('validacao')
        cxInputNumber.value = ''
    },3000)
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
        },3000)
    }
    if(numeroEscolhido !== numeroSecreto){
        if(numeroSecreto > numeroEscolhido){
            aviso.textContent = `O numero secreto é Maior que ${numeroEscolhido}`
            aviso.classList.add('validacao')
        }
        else if (numeroSecreto < numeroEscolhido){
            aviso.textContent = `O número secreto é Menor que ${numeroEscolhido}`
            aviso.classList.add('validacao')
        }
    }
    // else if(numeroEscolhido !== numeroSecreto){
    //     aviso.textContent = 'Você não acertou o número secreto :('
    //     aviso.classList.add('errou')
    // }

    setTimeout(function(){
        aviso.textContent = ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        aviso.classList.remove('validacao')
    },3000)
})

// funcao gameOver
function gameOver(){
    return window.location.reload(true)
}