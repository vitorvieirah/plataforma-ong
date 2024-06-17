const URL = 'http://localhost:8080/ongs'

const inputFile = document.querySelector('#input-file');

const pictureImage = document.querySelector('.picture__image');

const pictureImageTxt = 'Escolha uma imagem';

let imgBase64 = '';

// pictureImage.innerHTML = pictureImageTxt;

document.getElementById('ongForm').addEventListener('submit', async function(event){
    event.preventDefault();

    let infoOng = localStorage.getItem('info-ongs');
    
    if(infoOng){
        let infoOngJson = JSON.parse(infoOng);
        let textAreaValue = document.querySelector('textarea').value;
        infoOngJson.sobreNos = textAreaValue;

        salvar(infoOngJson);
    }
});

inputFile.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            imgBase64 = event.target.result; // Armazena a imagem em base64
            
            // Exibir a imagem no elemento HTML, se necessário
            pictureImage.innerHTML = `<img src="${imgBase64}" class="img-input-picture">`;
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
    console.log("cons 2");
});


function buttonProximo(){
    let nomeFantasiaIn = document.getElementById('nomeFantasia-ong').value;
    let nomeEmpresarialIn = document.getElementById('nomeEmpresarial-ong').value;
    let nomeDonoIn = document.getElementById('nomeDono-ong').value;
    let facebookIn = document.getElementById('facebook-ong').value;
    let senhaIn = document.getElementById('senha-ong').value;
    let instagramIn = document.getElementById('instagram-ong').value; 
    let xIn = document.getElementById('x-ong').value;
    let tiktokIn = document.getElementById('tiktok-ong').value;
    let telefoneIn = document.getElementById('telefone-ong').value;
    let whatsappIn = document.getElementById('whatsapp-ong').value;
    let enderecoIn = document.getElementById('endereco-ong').value;
    let siteOngIn = document.getElementById('siteOng-ong').value;
    let pixIn = document.getElementById('pix-ong').value;
    let agenciaIn = document.getElementById('agencia-ong').value;
    let numContaIn = document.getElementById('numConta-ong').value;
    let cnpjIn = document.getElementById('cnpjOng-ong').value;

    let newOng = {
        nomeFantasia: nomeFantasiaIn,
        nomeEmpresarial: nomeEmpresarialIn,
        nomeDono: nomeDonoIn,
        facebook: facebookIn,
        senha: senhaIn,
        instagram: instagramIn,
        x: xIn,
        tikTok: tiktokIn,
        telefone: telefoneIn,
        whatsApp: whatsappIn,
        endereco: enderecoIn,
        siteOng: siteOngIn,
        pix: pixIn,
        agencia: agenciaIn,
        nroConta: numContaIn,
        sobreNos: '',
        cnpj: cnpjIn,
        pathImagem: imgBase64
    };

    localStorage.setItem('info-ongs', JSON.stringify(newOng));
}

async function salvar(ong){
    let parametros = {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(ong)
    };

    try{
        let response = await fetch(URL, parametros);
        let data = await response.json();
        console.log("Resposta do servidor: ", data);
        
        if(response.ok){
            if(response.status === 201){
                window.location.href = '../html/homepageLogado.html'
            }
            localStorage.setItem('usuario', JSON.stringify(data)); 
            return data;
        }else{
            console.error("Erro na resposta do servidor:", response.status, response.statusText);
        }

    }catch(error){
        console.log("Erro ao salvar ong: ", error);
    }
}