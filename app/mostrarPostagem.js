import { conexao } from "./conectaApi.js";

async function mostrarTela(lista){
    const areaDePostagem = document.querySelector("#feed");
    const listaPostagens = await lista;
    areaDePostagem.innerHTML = "";
    listaPostagens.forEach(async e => {
        const autor = await buscarUsuario(e.userId)        
        areaDePostagem.innerHTML+=`
        <section class="postagem flex__container">
                <div class="postagem-cabecalho flex__container">
                    <img src="img/avatar-ausente.png" alt="Avatar do usuario" class="postagem-avatar" id="postagem-avatar" data-postagem="avatar">
                    <h3 class="postagem-autor" id="postagem-autor" data-postagem="autor">${autor}</h3>
                </div>
                <div class="postagem-corpo flex__container">
                    <h2 class="postagem-titulo" id="postagem-titulo" data-postagem="titulo">${e.title}</h2>
                    <p class="postagem-texto" id="postagem-texto" data-postagem="texto">${e.body}</p>
                    <div class="postagem-assinatura-container">
                        <p class="postagem-assinatura" id="postagem-assinatura" data-postagem="assinatura">Teste assinatura</p>
                    </div>
                </div>
            </section>
        `
    })

    

}
async function buscarUsuario(id){
    const autorDaPostagem = await conexao.buscarUsuarioUnico(id);
    const autorDaPostagemTraduzido = autorDaPostagem[0].name;
    return autorDaPostagemTraduzido;
}

mostrarTela(conexao.buscaPostagens())