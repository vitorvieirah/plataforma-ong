const URL = 'http://localhost:8080/ongs';

async function logar(){
    let cnpj = document.getElementById('cnpj-ong').value;
    let senha = document.getElementById('senha-ong').value;

    let ong = await buscarPorCnpj(cnpj);

    console.log(ong.senha);
    console.log(senha);

    if(ong === null){
        console.log("Ong não encontrada");
    }else{
        if(ong.senha === senha){
            window.location.href = "../html/homepageLogado.html";
            localStorage.setItem('usuario', JSON.stringify(ong));
        }else{
            console.log("Senha incorreta");
        }
    }
}


async function buscarPorCnpj(cnpj){
    let path = `${URL}/consultar-por-cnpj/${cnpj}`;
    let data;

    try{
        let response = await fetch(path);
        data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Erro ao consultar ong por cnpj: ", error);
    }

    return data;
}
