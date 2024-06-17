const URL = 'http://localhost:8080/doadores'

let inputNome, inputEmail, inputTelefone, inputCpf, inputAniversario, img;
let doador;

window.onload = function() {
    doador = JSON.parse(localStorage.getItem('usuario'));
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
    img = document.getElementById('img-perfil');
}

async function setInfoInputs(doador){
    inputNome.value = doador.nome;
    inputEmail.value = doador.email;
    inputTelefone.value = doador.telefone;
    inputAniversario.value = doador.dataDeNascimento;
    inputCpf.value = doador.cpf;
    let imgBd = await buscarPathImagem();
    console.log(imgBd);
    let newPath = imgBd.url.replace(/\\/g, "\\");
    console.log(newPath);
    img.src = newPath;
}

function getValueInputs(){
    return newDoador = {
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTelefone.value,
        dataDeNascimento: inputAniversario.value,
        cpf: inputCpf.value,
        id: null
    }
}

function gravar(){
    let newDoador = getValueInputs();
    alterar(newDoador);
    newDoador.id = doador.id;
    localStorage.setItem('usuario', JSON.stringify(newDoador));
}

async function alterar(newDoador){
    let path = `${URL}/alterar/${doador.id}`;

    let parametros = {
        method: "PUT",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(newDoador)
    };

    let data;

    try{
        let response = await fetch(path, parametros);
        data = await response.json();
    }catch(error){
        console.log("Erro ao alterar ong: ", error);
    }
}

async function buscarPathImagem(){
    let path = `${URL}/${doador.id}`;
    let data = "";
    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar imagem !", error);
    }
    
    return data;
}

async function deletar(){
    let path = `${URL}/${doador.id}`;
    let data;

    let parametros = {
        method: "DELETE",
        headers:{
            "Content-type": "application/json"
        }
    }

    try{
        let response = await fetch(path, parametros);
        data = await response.json();
    }catch(error){
        console.log("Erro ao deletar doador !", error);
    }

    window.location.href = '../html/index.html';
}
