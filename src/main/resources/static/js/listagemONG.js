import {pesquisarPorNome} from '../js/ong.js';
import {buscarPorId} from '../js/ong.js';

const imgSetaParaCima = '../img/icone-para-cima.png';
const imgSetaParaBaixo = '../img/icone-para-baixo.png';

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

function pesquisar(){
    let inputPesquisa = document.getElementById('pesquisa').value;

    let listOng = pesquisarPorNome(inputPesquisa);

    atualizarTabela(listOng);
}

function atualizarTabela(listOng){
    let table = document.querySelector('tbody');
    table.innerHTML = '';

    listOng.forEach(ong => {
        let linha = document.createElement('tr');
        linha.tr = `
            <td>
                <img class="imagem-ong-table" src="${ong.imagem}" alt="imagem exemplo ong">
                <div class="sobre-ong">
                    <h2>Titulo ong</h2>
                    <p>${ong.sobre}</p>
                </div>
                <div class="div-botao-ver-mais">
                    <button></button>
                    <a href=""><button class="botao-ver-mais" onclick="redirecionarPerfilOngList(${ong.id})">Ver mais</button></a>
                </div>    
            </td>
        `;

        table.append(linha);
    });
}

function redirecionarPerfilOngList(id){
    let ong = buscarPorId(id);
    localStorage.setItem('ong', JSON.stringify(ong));
    window.location.href = '../html/perfilONG.html';
}