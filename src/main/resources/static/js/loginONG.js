import {buscarPorCnpj} from '../js/ong.js';

function logar(){
    let cnpj = document.getElementById('cnpj-ong').value;
    let senha = document.getElementById('senha-ong').value;

    let ong = buscarPorCnpj(cnpj);

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