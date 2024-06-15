import {buscarPorEmail} from '../js/doador.js';

function logar() {
    let email = document.getElementById('cnpj-ong').value;
    let senha = document.getElementById('senha-ong').value;
    
    let doador = buscarPorEmail(email);
    
    if(doador === null){
        console.log("Doador não encontrado");
    }else{
        if(ong.senha === senha){
            window.location.href = "../html/homepageLogado.html";
            localStorage.setItem('doador', JSON.stringify(doador));
        }else{
            console.log("Senha incorreta");
        }
    }
}
