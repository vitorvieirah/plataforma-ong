const URL = "http://localhost:8080/ongs";

export async function alterar(newOng, id){
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


export async function buscarPorCnpj(cnpj){
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

export async function pesquisarPorNome(inputPesquisa){
    let path = `${URL}/${inputPesquisa}`;
    let data;

    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar por nome: ", error);
    }

    return data;
}

export async function buscarPorId(id){
    let path = `${URL}/${id}`;
    let data;

    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar por id: ", error);
    }

    return data;
}