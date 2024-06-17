const URL = "http://localhost:8080/doadores";

const inputFile = document.querySelector('#input-file');
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = 'Escolha uma imagem';

// let imgBase64 = ''; // Variável para armazenar a imagem em base64

// pictureImage.innerHTML = pictureImageTxt;

// inputFile.addEventListener('change', function(event) {
//     const inputTarget = event.target;
//     const file = inputTarget.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.addEventListener('load', function(event) {
//             imgBase64 = event.target.result; // Armazena a imagem em base64
            
//             // Exibir a imagem no elemento HTML, se necessário
//             pictureImage.innerHTML = `<img src="${imgBase64}" class="img-input-picture">`;
//         });

//         reader.readAsDataURL(file);
//     } else {
//         pictureImage.innerHTML = pictureImageTxt;
//     }
// });

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


document.getElementById('doadorForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    console.log("Teste da imagem: ", img);

    let nomeDoador = document.getElementById('nome').value;
    let emailDoador = document.getElementById('email').value;
    let senhaDoador = document.getElementById('senha').value;
    let cpfDoador = document.getElementById('cpf').value;
    let telefoneDoador = document.getElementById('telefone').value;
    let dataNascimentoDoador = document.getElementById('data-nascimento').value;

    let newDoador = {
        'nome': nomeDoador,
        'email': emailDoador,
        'senha': senhaDoador,
        'cpf': cpfDoador,
        'telefone': telefoneDoador,
        'dataDeNascimento': dataNascimentoDoador,
        'imagemPerfil': img // Enviar a imagem em base64
    };

    console.log('Dados do novo doador:', newDoador);

    let resultado = await salvar(newDoador);
    console.log('Cadastrado com sucesso:', resultado);
});

async function salvar(doador) {
    let parametros = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(doador)
    };


    console.log('Dados antes de serem passados para a requisição: ', doador);

    try {
        let response = await fetch(URL, parametros);
        console.log("Response: ", response)
        let data = await response.json();

        if (response.ok) {
            console.log("Resposta do servidor:", data);
            return data;
        } else {
            console.error("Erro na resposta do servidor:", response.status, response.statusText);
        }
    } catch (error) {
        console.log("Erro ao salvar doador:", error);
    }
}