import {alterar} from '../js/ong.js';

var inputs = [];
var botao;
let nomeFantasiaIn, nomeEmpresarialIn, nomeDonoIn, facebookIn, instagramIn, xIn, tiktokIn, telefoneIn, whatsappIn, enderecoIn, siteOngIn, pixIn, agenciaIn, numContaIn, sobreIn, img;

window.onload = function() {
    inputs = document.querySelectorAll('input');
    botao = document.getElementById('botao-gravar');
    sobreIn = document.getElementById('sobre-ong');
    desativaInputs();

    nomeFantasiaIn = document.getElementById('nomeFantasia-ong');
    nomeEmpresarialIn = document.getElementById('nomeEmpresarial-ong');
    nomeDonoIn = document.getElementById('nomeDono-ong');
    facebookIn = document.getElementById('facebook-ong');
    instagramIn = document.getElementById('instagram-ong'); 
    xIn = document.getElementById('x-ong');
    tiktokIn = document.getElementById('tiktok-ong');
    telefoneIn = document.getElementById('telefone-ong');
    whatsappIn = document.getElementById('whatsapp-ong');
    enderecoIn = document.getElementById('endereco-ong');
    siteOngIn = document.getElementById('siteOng-ong');
    pixIn = document.getElementById('pix-ong');
    agenciaIn = document.getElementById('agencia-ong');
    numContaIn = document.getElementById('numConta-ong');
    img = document.getElementById('img-perfil');
    
    let ong = JSON.parse(localStorage.getItem('ong'));

    // let info = {
    //     nomeFantasia: nomeFantasiaIn.value,
    //     nomeEmpresarial: nomeEmpresarialIn.value,
    //     nomeDono: nomeDonoIn.value,
    //     facebook: facebookIn.value,
    //     senha: senhaIn.value,
    //     instagram: instagramIn.value,
    //     x: xIn.value,
    //     tiktok: tiktokIn.value,
    //     telefone: telefoneIn.value,
    //     whatsapp: whatsappIn.value,
    //     endereco: enderecoIn.value,
    //     siteOng: siteOngIn.value,
    //     pix: pixIn.value,
    //     agencia: agenciaIn.value,
    //     numConta: numContaIn.value
    // };

    colocarInfoNosInputs(ong);
};


function buttonAlterar(){
    ativarBotaoGravar();
    ativarInputs();
}

function gravar(){
    desativarBotaoGravar();
    desativaInputs();
    let newOng = {
        nomeFantasia: nomeFantasiaIn.value,
        nomeEmpresarial: nomeEmpresarialIn.value,
        nomeDono: nomeDonoIn.value,
        facebook: facebookIn.value,
        instagram: instagramIn.value,
        x: xIn.value,
        tiktok: tiktokIn.value,
        telefone: telefoneIn.value,
        whatsapp: whatsappIn.value,
        endereco: enderecoIn.value,
        siteOng: siteOngIn.value,
        pix: pixIn.value,
        agencia: agenciaIn.value,
        numConta: numContaIn.value
    };
    localStorage.setItem('ong', JSON.stringify(newOng));
    alterar(newOng);
}

function desativaInputs(){
    inputs.forEach(input => {
        input.disabled = true;
        input.style.backgroundColor = '#f3efef';
    });

    if (sobreIn) {
        sobreIn.disabled = true;
        sobreIn.style.backgroundColor = '#f3efef';
    }
}

function ativarInputs(){
    inputs.forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = '#ffffff';
    });

    if (sobreIn) {
        sobreIn.disabled = false;
        sobreIn.style.backgroundColor = '#ffffff';
    }
}

function ativarBotaoGravar(){
    if (botao) {
        botao.style.visibility = 'visible';
    }
}

function desativarBotaoGravar(){  
    if (botao) {
        botao.style.visibility = 'hidden';
    }
}

function colocarInfoNosInputs(info){
    if (info) {
        nomeFantasiaIn.value = info.nomeFantasia || '';
        nomeEmpresarialIn.value = info.nomeEmpresarial || '';
        nomeDonoIn.value = info.nomeDono || '';
        facebookIn.value = info.facebook || '';
        instagramIn.value = info.instagram || '';
        xIn.value = info.x || '';
        tiktokIn.value = info.tiktok || '';
        telefoneIn.value = info.telefone || '';
        whatsappIn.value = info.whatsapp || '';
        enderecoIn.value = info.endereco || '';
        siteOngIn.value = info.siteOng || '';
        pixIn.value = info.pix || '';
        agenciaIn.value = info.agencia || '';
        numContaIn.value = info.numConta || '';
        img.src = info.imagem;
    }
}

window.alterar = buttonAlterar;
window.gravar = gravar;

