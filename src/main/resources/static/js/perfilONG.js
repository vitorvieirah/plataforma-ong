var inputs = [];
var botao;

window.onload = function() {
    inputs = document.querySelectorAll('input');
    botao = document.getElementById('botao-gravar');
    desativaInputs();
};

function alterar(){
    ativarBotaoGravar();
    ativarInputs();
}

function gravar(){
    desativarBotaoGravar();
    desativaInputs();
}

function desativaInputs(){
    inputs.forEach(input => {
        input.disabled = true;
        input.style.backgroundColor = '#f3efef';
    });
}

function ativarInputs(){
    inputs.forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = '#ffffff';
    });
}

function ativarBotaoGravar(){
    botao.style.visibility = 'visible';
}

function desativarBotaoGravar(){  
    botao.style.visibility = 'hidden';
}

