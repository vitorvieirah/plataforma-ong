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


function buttonProximo(){
    let infoOngs = localStorage.getItem('info-ongs');
    let ongPart1 = infoOngs ? JSON.parse(infoOngs) : {};

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

    let newOng = {
        nomeFantasia: nomeFantasiaIn,
        nomeEmpresarial: nomeEmpresarialIn,
        nomeDono: nomeDonoIn,
        facebook: facebookIn,
        senha: senhaIn,
        instagram: instagramIn,
        x: xIn,
        tiktok: tiktokIn,
        telefone: telefoneIn,
        whatsapp: whatsappIn,
        endereco: enderecoIn,
        siteOng: siteOngIn,
        pix: pixIn,
        agencia: agenciaIn,
        numConta: numContaIn,
        imgOng: img.src,
        sobreOng: ''
    };

    localStorage.setItem('info-ongs', JSON.stringify(newOng));
}