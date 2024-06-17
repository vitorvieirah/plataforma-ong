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
    console.log("cons 2");
});


document.getElementById('doadorForm').addEventListener('submit', async function(event) {
    console.log("cons 5");
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
        console.log("Response: ", response);
        let data = await response.json();

        if (response.ok) {
            console.log("Resposta do servidor:", data);
            if (response.status === 201) {
                window.location.href = '../html/homepageLogado.html';
            }
            localStorage.setItem('usuario', JSON.stringify(data));
            return data;
        } else {
            console.error("Erro na resposta do servidor:", response.status, response.statusText);
        }
    } catch (error) {
        console.log("Erro ao salvar doador:", error);
    }
}