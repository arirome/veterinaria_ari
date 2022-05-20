function showAlert(tipo, mensaje, divElemento){
    divElemento.innerHTML=mensaje;
    switch(tipo){
        case "error":
            divElemento.className= "alert alert-danger";
            break;
        case "valido":
            divElemento.className= "alert alert-success";
            break;  

    }
    divElemento.hidden=false;
    setTimeout(function(){
     divElemento.hidden=true;
    }, 3000 );
    
}