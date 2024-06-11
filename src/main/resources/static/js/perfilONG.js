var inputs = [];
var botao;
//tentar melhora aproveitando vetor
let nomeFantasiaIn;
let nomeEmpresarialIn;
let nomeDonoIn;
let facebookIn;
let instagramIn; 
let xIn;
let tiktokIn;
let telefoneIn;
let whatsappIn;
let enderecoIn;
let siteOngIn; 
let pixIn;
let agenciaIn; 
let numContaIn;

window.onload = function() {
    inputs = document.querySelectorAll('input');
    botao = document.getElementById('botao-gravar');
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
    //puxa as informações do localstorage
    colocarInfoNosInputs(info, idOng);
};

function alterar(){
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
        senha: senhaIn.value,
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
    //da classe ong
    alterar(newOng);
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

function colocarInfoNosInputs(info){
    nomeFantasiaIn.value = info.nomeFantasia;
    nomeEmpresarialIn.value = info.nomeEmpresarial;
    nomeDonoIn.value = info.nomeDono;
    facebookIn.value = info.facebook;
    instagramIn.value = info.instagram;
    xIn.value = info.x;
    tiktokIn.value = info.tiktok;
    telefoneIn.value = info.telefone;
    whatsappIn.value = info.whatsapp;
    enderecoIn.value = info.endereco;
    siteOngIn.value = info.siteOng;
    pixIn.value = info.pix;
    agenciaIn.value = info.agencia;
    numContaIn.value = info.numConta;
}

