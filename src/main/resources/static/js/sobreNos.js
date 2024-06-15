function redirecionar(opcao){
    if (opcao.value === "ong") {
        window.location.href = "../html/loginONG.html";
    }else{
        window.location.href = "../html/loginDoador.html";
    }
}

function redirecionarPerfil(){
    let usuarioLogado = localStorage.getItem('usuario');
    usuarioLogado = JSON.parse(usuarioLogado);
    if(usuarioLogado){
        if(usuarioLogado.tipoUsuario === 'DOADOR'){
            window.location.href = '../html/perfilDoador.html';
        }else{
            window.location.href = '../html/perfilONG.html';
        }
    }
}