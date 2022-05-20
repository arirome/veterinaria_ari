function registro(){
    let email= document.getElementById("email").value;
    let usuario= document.getElementById("usua").value;
    let password= document.getElementById("contrase").value;
    let passwordConfirm= document.getElementById("confircontra").value;
    let divAlert=document.querySelector( '[name="alertregis"] ');  
     
   
    
    if(!validarPassword (password, passwordConfirm)){
        showAlert("error", "revise su contraseña", divAlert);
        return;
    }

    if(!validarUserName (usuario)){
        showAlert("error", "usuario incorrecto", divAlert);
        return;
    }
    

    if(!validarEmail (email)){
       showAlert("error", "email incorrecto", divAlert);  
    }

    if(!existeUserName(usuario)){
        showAlert("error", "usted ya esta registrado", divAlert);
        return;
    }
   
   
        showAlert("valido", "se pudo registrar correctamente", divAlert )

        datosUsuario()


        
    }

    function datosUsuario(){

        let email= document.getElementById("email").value;
        let usuario= document.getElementById("usua").value;
        let password= document.getElementById("contrase").value;
        let passwordConfirm= document.getElementById("confircontra").value;
       
         
    
               let  usuarioguardado=[];
                let array=uuid.v4();
       
                
                 existeUserName(usuario);
                
                 validarUserName(usuario);
              
                 validarPassword(password, passwordConfirm)
                
                 validarEmail(email)
                
                 let encriptado=CryptoJS.SHA256(password).toString()
       
                 usuarioguardado.push(array)
                 usuarioguardado.push(usuario)
                 usuarioguardado.push(encriptado)
                 usuarioguardado.push(email)
                 usuarioguardado.push(obtenerFechaHoraActual())
                 usuarioguardado.push(obtenerFechaHoraActual())

                 console.log(usuarioguardado)
                 usuarioslist.push(usuarioguardado) 


    }
    
   
