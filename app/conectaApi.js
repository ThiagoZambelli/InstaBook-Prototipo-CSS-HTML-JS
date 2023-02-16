const requisicaoPosts = 'https://jsonplaceholder.typicode.com/posts';


async function buscaPostagens(){
 const res = await fetch(requisicaoPosts);
 const postagens = res.json();

 return postagens
}

export const conexao = {
    buscaPostagens
}