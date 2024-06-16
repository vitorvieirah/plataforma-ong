const URL_ONG = "http://localhost:8080/ongs";
const URL_DOADOR = "http://localhost:8080/doadores";

async function consultarPorId(){
    let dado;
    let data;


    try{
        let response = await fetch(`${URL_DOADOR}/${dado}`);
        data = await response.json();
    }catch(error){
        console.log("Erro ao consultar doador por id: ", error);
    }

    if(data !== null){
        window.location.href = "../html/perfilDoador.html";
        //passar informações no localstorage
    }else{
        try{
            let response = await fetch(`${URL_ONG}/${dado}`);
            data = await response.json();
        }catch(error){
            console.log("Erro ao buscar ong por id: ", error);
        }

        if(data !== null){
            window.location.href = "../html/perfilOng.html";
            //passar informações no localstorage
        }else{
            console.log("Perfil não encontrado");
        }
    }
}