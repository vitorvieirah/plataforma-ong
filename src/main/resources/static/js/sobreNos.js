function redirecionar(opcao){
    if (opcao.value === "ong") {
        window.location.href = "../html/loginONG.html";
    }else{
        window.location.href = "../html/loginDoador.html";
    }
}

function redirecionarLogin(){
    let usuarioLogado = localStorage.getItem('usuario');
    if(usuarioLogado){
        
    }

}