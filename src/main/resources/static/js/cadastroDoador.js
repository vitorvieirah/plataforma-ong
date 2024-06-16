const URL = "http://localhost:8080/doadores";

const inputFile = document.querySelector('#input-file');
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = 'Escolha uma imagem';
let imgBase64 = '';
let imageFile = '';

pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(event) {
    console.log("cons 1");
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            imgBase64 = event.target.result; // Armazena a imagem em base64
            
            // Exibir a imagem no elemento HTML, se necessário
            pictureImage.innerHTML = `<img src="${imgBase64}" class="img-input-picture">`;

            // Converter base64 para Blob
            const blob = base64ToBlob(imgBase64);

            // Criar um objeto File para enviar ao backend
            imageFile = new File([blob], file.name, { type: file.type });
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
    console.log("cons 2");
});

function base64ToBlob(base64) {
    console.log("cons 3");
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    console.log("cons 4");
    return new Blob(byteArrays, { type: 'image/jpeg' }); // Defina o tipo de acordo com a imagem
}

document.getElementById('doadorForm').addEventListener('submit', async function(event) {
    console.log("cons 5");
    event.preventDefault();

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
        'imagemPerfil': imageFile // Enviar a imagem em base64
    };

    console.log('Dados do novo doador:', newDoador);

    let resultado = await salvar(newDoador);
    console.log('Cadastrado com sucesso:', resultado);
});

async function salvar(doador) {
    console.log("cons 6");
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