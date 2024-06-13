const URL = "http://localhost:8080/ongs"

document.getElementById('ongForm').addEventListener('submit', async function(event){
    event.preventDefault();

    let infoOng = localStorage.getItem('info-ongs');
    
    if(infoOng){
        let infoOngJson = JSON.parse(infoOng);
        let textAreaValue = document.querySelector('textarea').value;
        infoOngJson.sobreOng = textAreaValue;

        salvar(infoOngJson);
    }
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