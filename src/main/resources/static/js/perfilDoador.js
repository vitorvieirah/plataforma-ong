import {alterar} from '../js/doador.js';

let inputNome, inputEmail, inputTelefone, inputCpf, inputAniversario;

window.onload = function() {
    let doador = JSON.parse(localStorage.getItem('doador'));
    getInputs();
    setInfoInputs(doador);
};

document.addEventListener('DOMContentLoaded', function() {
    const editarBtn = document.getElementById('editar-btn');
    const salvarBtn = document.getElementById('salvar-btn');
    const inputs = document.querySelectorAll('.info-perfil input');

    editarBtn.addEventListener('click', function() {
        inputs.forEach(input => {
            input.removeAttribute('readonly');
            input.style.backgroundColor = 'white';
            input.style.border = '1px solid #ccc';
        });
        editarBtn.style.display = 'none';
        salvarBtn.style.display = 'inline-block';
    });

    salvarBtn.addEventListener('click', function() {
        inputs.forEach(input => {
            input.setAttribute('readonly', 'true');
            input.style.backgroundColor = 'transparent';
            input.style.border = 'none';
        });
        salvarBtn.style.display = 'none';
        editarBtn.style.display = 'inline-block';
    });
});

function getInputs(){
    inputNome = document.getElementById('input-nome');
    inputEmail = document.getElementById('input-email');
    inputTelefone = document.getElementById('input-telefone');
    inputCpf = document.getElementById('input-cpf');
    inputAniversario = document.getElementById('input-aniversario');
}

function setInfoInputs(doador){
    inputNome.value = doador.nome;
    inputEmail.value = doador.email;
    inputTelefone.value = doador.telefone;
    inputAniversario.value = doador.aniversario;
}

function getValueInputs(){
    return doador = {
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTelefone.value,
        aniversario: inputAniversario.value
    }
}

function gravar(){
    let doador = getValueInputs();
    alterar(doador);
    localStorage.setItem('doador', JSON.stringify(doador));
}

window.gravar = gravar;
