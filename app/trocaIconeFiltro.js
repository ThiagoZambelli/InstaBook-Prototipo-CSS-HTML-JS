const btnFiltroContainer = document.querySelector("#btn-filtro-container");

btnFiltroContainer.addEventListener('click', (e)=>{  
    
    if(e.originalTarget.attributes.src.value === "img/btn-filtro-aberto.png"){
    e.originalTarget.attributes.src.value = "img/btn-filtro.png";
        }else if(e.originalTarget.attributes.src.value === "img/btn-filtro.png"){
        e.originalTarget.attributes.src.value = "img/btn-filtro-aberto.png";
        }
})


