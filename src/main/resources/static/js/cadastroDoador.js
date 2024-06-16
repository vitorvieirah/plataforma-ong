import {salvar} from '../js/doador.js';

const inputFile = document.querySelector('#input-file');

const pictureImage = document.querySelector('.picture__image');

const pictureImageTxt = 'Escolha uma imagem';

let img = '';

pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(even){
    const inputTarget = even.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(event){
            const readerTarget = event.target;

            img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('img-input-picture');

            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);
        });
        
        reader.readAsDataURL(file);
    }else{
        pictureImage.innerHTML = pictureImageTxt;
    }
});

document.getElementById('doadorForm').addEventListener('submit', async function(event){
    event.preventDefault();

    let nomeDoador = document.getElementById('nome').value;
    let emailDoador = document.getElementById('email').value;
    let senhaDoador = document.getElementById('senha').value;
    let cpfDoador = document.getElementById('cpf').value;
    let telefoneDoador = document.getElementById('telefone').value;
    let dataNascimentoDoador = document.getElementById('data-nascimento').value; 

    let newDoador = {
        nome: nomeDoador,
        email: emailDoador,
        senha: senhaDoador,
        cpf: cpfDoador,
        telefone: telefoneDoador,
        dataNascimento: dataNascimentoDoador
    };

    salvar(newDoador);
});