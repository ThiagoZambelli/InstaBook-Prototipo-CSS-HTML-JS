const requisicaoPosts = 'https://jsonplaceholder.typicode.com/posts';
const requisicaoUsuarios = 'https://jsonplaceholder.typicode.com/users';


async function buscaPostagens(){
 const res = await fetch(requisicaoPosts);
 const postagens = res.json();

 return postagens;
}

async function buscaUsuarios(){
    const res = await fetch(requisicaoUsuarios);
    const usuarios = res.json();

    return usuarios;
}

async function buscarUsuarioUnico(id){
    const res = await fetch(requisicaoUsuarios+`?id=${id}`)
    const usuario = res.json();   

    return usuario;
}

export const conexao = {
    buscaPostagens,
    buscaUsuarios,
    buscarUsuarioUnico
}