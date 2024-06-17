const URL = 'http://localhost:8080/doadores';

async function logar() {
    let email = document.getElementById('email-doador').value;
    let senha = document.getElementById('senha-doador').value;
    
    let doador = await buscarPorEmail(email);
    
    if(doador === null){
        console.log("Doador não encontrado");
    }else{
        if(doador.senha === senha){
            window.location.href = "../html/homepageLogado.html";
            localStorage.setItem('usuario', JSON.stringify(doador));
        }else{
            console.log("Senha incorreta");
        }
    }
}



async function buscarPorEmail(email){
    let path = `${URL}/buscar-por-email/${email}`;
    let data;

    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar doador por email: ", error);
    }

    return data;
}
