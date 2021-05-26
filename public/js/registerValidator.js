window.addEventListener("load", ()=>{

  let registerForm = document.querySelector('.main-form');
  registerForm.addEventListener("submit", (e) => {
      let errores = [];
      
      let campoNombre = document.querySelector('#nombre');
      let apellidoPaterno = document.querySelector('#apellidoPaterno');
      let apellidoMaterno = document.querySelector('#apellidoMaterno');
      let campoApellido = document.querySelector('#apellidos');
      let campoEmail = document.querySelector('#email'); 
      let campoPassword= document.querySelector('#password');
      let campoPassword2= document.querySelector('#password');
      let campoImagen = document.querySelector('#imagenUsuario');
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let validExtentions = [".jpg", ".jpeg", ".png", ".gif"];  
      
      // console.log('evento submit', campoNombre, apellidoPaterno);
      // alert('Evento submit');
      // alert('Evento submit'+ campoNombre + apellidoPaterno);
      //VALIDANDO CAMPO NOMBRE
      if(campoNombre.value == ""){
          errores.push("Por favor ingrese su nombre");
      } else if (campoNombre.value.length < 2){
          errores.push('Su nombre debe tener al menos 2 caracteres');
      }
      //VALIDANDO CAMPO APELLIDO PATERNO
      if(apellidoPaterno.value == ""){
          errores.push("Por favor ingrese su apellido");
      } else if (apellidoPaterno.value.length < 2){
          errores.push('Su apellido debe tener al menos 2 caracteres');
      }

      //VALIDANDO CAMPO APELLIDO MATERNO
      if(apellidoMaterno.value == ""){
        errores.push("Por favor ingrese su apellido");
    } else if (apellidoMaterno.value.length < 2){
        errores.push('Su apellido debe tener al menos 2 caracteres');
    }

      //VALIDANDO CAMPO EMAIL
      if (campoEmail.value==""){
          errores.push('Debe ingresar un email');
      } else if (!re.test(campoEmail.value)){
          errores.push('Debe ingresar un email valido');
      }
      //VALIDANDO CAMPO DE PASSWORD
      if(campoPassword.value == ""){
          errores.push("Por favor ingrese una contraseña");
      } else if (campoPassword.value.length < 8){
          errores.push('La contraseña debe tener al menos 8 caracteres');
      }
      //VALIDANDO CAMPO DE PASSWORD
      if(campoPassword2.value == ""){
        errores.push("Por favor debe ingresar la misma contraseña previa");
      } else if (campoPassword2.value.length < 8){
        errores.push('La contraseña debe ser la misma ingresada previamente');
      }

      //VALIDANDO CAMPO DE IMAGEN
      if(!validExtentions.includes(campoImagen.value.substr(campoImagen.value.length - 4)) && campoImagen.value != ""){
          errores.push(`La extensiones permitidas son ${validExtentions.join(', ')}`);
      }

      if(errores.length > 0){
          e.preventDefault();
          let ulErrores = document.querySelector('div.errores ul');
          ulErrores.innerHTML=""
          for(let i = 0; i<errores.length;i++){
              ulErrores.innerHTML+="<li>"+errores[i]+"</li>"
          }
      }
  });
});