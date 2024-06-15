const URL = "http://localhost:8080/Ongs"

async function logar(){
    let email = document.getElementById('email-doador').value;
    let senha = document.getElementById('senha-doador').value;

    let doador = await buscarPorEmail(email);

    if(doador === null){
        console.log("Doador não encontrada");
    }else{
        if(doador.senha === senha){
            window.location.href = "../html/homepageLogado.html";
        }else{
            console.log("Senha incorreta");
        }
    }
}


export async function buscarPorEmail(email){
    let path = `${URL}/${email}`;
    let data;

    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar doador por email: ", error);
    }

    return data;
}

export async function salvar(ong){
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