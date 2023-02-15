const enviar = document.querySelector('.rating__botao-enviar');
const botao_nota = document.querySelectorAll('.rating__botao');
const painelNota = document.querySelector('.rating__card');
const painelTy = document.querySelector('.thankYou__card');
const msg = document.querySelector('.thankYou__msg');
let nota = null ;

botao_nota.forEach( (botao) => {
    botao.addEventListener('click', () => {
        nota = botao.value
    })
})

enviar.addEventListener('click', () => {
    if(nota) {
        painelNota.classList.add('desativado')
        painelTy.classList.remove('desativado')
        msg.innerHTML = `You selected ${nota} out of 5`
    }
    else {
        alert('Select a number for the rating!')
    }
})

