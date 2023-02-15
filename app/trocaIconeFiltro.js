const btnFiltroContainer = document.querySelector("#btn-filtro-container");





btnFiltroContainer.addEventListener('click', (e)=>{
    console.log(e.target.attributes.src.value)
 
    if(btnAberto(e)){
        e.target.attributes.src.value = "img/btn-filtro.png";
    }else if(btnFechado(e)){
        e.target.attributes.src.value = "img/btn-filtro-aberto.png";
    }
    
})




function btnFechado(e) {
    return e.target.attributes.src.value === "img/btn-filtro.png";
}

function btnAberto(e) {
    return e.target.attributes.src.value === "img/btn-filtro-aberto.png";
}
