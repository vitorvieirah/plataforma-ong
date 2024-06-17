const URL = 'http://localhost:8080/ongs'

const imgSetaParaCima = '../img/icone-para-cima.png';
const imgSetaParaBaixo = '../img/icone-para-baixo.png';

window.onload = async function() {
    let list = await pesquisarTodos();
    atualizarTabela(list);
}

function alteraImagemBotaoPesquisa() {
    let img = document.getElementById('imagem-botao');
    let imgSrc = img.src;

    if (imgSrc.endsWith('icone-para-cima.png')) {
        img.src = imgSetaParaBaixo;
    } else {
        img.src = imgSetaParaCima;
    }

    let label = document.getElementById('label-botao-ordenar');
    let textoAtual = label.innerHTML;

    if(textoAtual === 'A'){
        label.innerHTML = 'Z';
    }else{
        label.innerHTML = 'A';
    }
}

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

async function pesquisar(){
    let inputPesquisa = document.getElementById('pesquisa').value;

    let listOng = await pesquisarPorNome(inputPesquisa);

    atualizarTabela(listOng);
}

function atualizarTabela(listOng){
    console.log(listOng);
    let table = document.querySelector('tbody');
    table.innerHTML = '';

    listOng.forEach(async ong => {
        let linha = document.createElement('tr');
        let img = await buscarPathImagem(ong.id);
        let newPath = img.url.replace(/\\/g, "\\");

        console.log(ong);
        linha.innerHTML = `
            <td>
                <img class="imagem-ong-table" src="${newPath}" alt="imagem exemplo ong">
                <div class="sobre-ong">
                    <h2>${ong.nomeFantasia}</h2>
                    <p>${ong.sobreNos}</p>
                </div>    
            </td>
        `;

        table.append(linha);
    });
}

async function pesquisarPorNome(inputPesquisa){
    let path = `${URL}/consultar-por-nome/${inputPesquisa}`;
    let data;

    try{
        let parametros = await fetch(path);
        data = parametros.json();
    }catch(error){
        console.log("Erro ao consultar por nome:", error);
    }

    return data;
}

async function buscarPathImagem(id){
    let path = `${URL}/${id}`;
    let data = "";
    try{
        let response = await fetch(path);
        data = await response.json();
        console.log("Dentro da req: ", data);
    }catch(error){
        console.log("Erro ao consultar imagem !", error);
    }
    
    return data;
}

async function pesquisarTodos(){
    let data;
    
    try{
        let response = await fetch(URL);
        data = await response.json(); 
    }catch(error){
        console.log("Erro ao consultar todos: ", error);
    }

    return data;
}