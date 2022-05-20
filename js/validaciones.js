function validarPassword(password, passwordConfirm){

    PATRON= /(\w){6,}$/;
  
   if(!PATRON.test(password) || !PATRON.test(passwordConfirm)){
          
          return false;
     }
      if(password != passwordConfirm){
            return false;
      }
           return true;   
        
       }
  
      
  
      function validarUserName(usuario){
  
          PATRON= /^(\w+(0-9)?){6,}$/;
          if(!PATRON.test(usuario)){
              
                 return false
                 
            }
              
                  return true;   
  
      }
      function validarEmail (email){
  
          PATRON= /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/;

          if(!PATRON.test(email)){
              
               return false;
            }
                
             
              return true;
            }
            
           function existeUserName(usuario){
           for (let index=0; index<usuarioslist.length; index++){
              let usuarioregis=usuarioslist[index][1];
              if(usuario===usuarioregis){
                  
                   return false; 
           }
          }
          
             return true;
           
         } 

         function obtenerFechaHoraActual() {
            let hoy = new Date();
        
            let fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
            let hora  = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        
            let fechaHora = fecha + ' ' + hora;
        
            return fechaHora;
        }