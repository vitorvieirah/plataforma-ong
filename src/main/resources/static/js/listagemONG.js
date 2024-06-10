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

function redirecionar(opcao){
    if (opcao.value === "ong") {
        window.location.href = "../html/loginONG.html";
    }else{
        window.location.href = "../html/loginDoador.html";
    }
}