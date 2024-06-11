const URL = "http://localhost:8080/ongs"

document.getElementById('ongForm').addEventListener('submit', async function(event){
    event.preventDefault();

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
        numConta: numContaIn
    };

    salvar(newOng);
});

function logar(){
    let cnpj = document.getElementById('cnpj-ong').value;
    let senha = document.getElementById('senha-ong').value;

    let ong = buscarPorCnpj(cnpj);

    if(ong === null){
        console.log("Ong não encontrada");
    }else{
        if(ong.senha === senha){
            window.location.href = "../html/homepageLogado.html";
        }else{
            console.log("Senha incorreta");
        }
    }
}

async function alterar(newOng, id){
    let path = `${URL}/${id}`;

    let parametros = {
        method: "PUT",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(newOng)
    };

    try{
        let response = await fetch(path, parametros);
        data = await response.json();
        console.log("Sucesso ao alterar informações")
    }catch(error){
        console.log("Erro ao consultar alterar dados da ong: ", error);
    }
}


async function buscarPorCnpj(cnpj){
    let path = `${URL}/${cnpj}`;
    let data;

    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar ong por cnpj: ", error);
    }

    return data;
}


async function salvar(ong){
    let parametros = {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(ong)
    };

    let data;

    try{
        let response = await fetch(URL, parametros);
        data = await response.json();
    }catch(error){
        console.log("Erro ao salvar ong: ", error);
    }
}