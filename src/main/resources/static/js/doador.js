const URL = "http://localhost:8080/ongs"

document.getElementById('doadorForm').addEventListener('submit', async function(event){
    event.preventDefault();

    let nomeDoador = document.getElementById('nome').value;
    let emailDoador = document.getElementById('email').value;
    let senhaDoador = document.getElementById('senha').value;
    let cpfDoador = document.getElementById('cpf').value;
    let telefoneDoador = document.getElementById('telefone').value;
    let dataNascimentoDoador = document.getElementById('data-nascimento').value; 

    let newDoador = {
        nome: nomeDoador,
        email: emailDoador,
        senha: senhaDoador,
        cpf: cpfDoador,
        telefone: telefoneDoador,
        dataNascimento: dataNascimentoDoador
    };

    await salvar(newDoador);
});

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


async function buscarPorEmail(email){
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