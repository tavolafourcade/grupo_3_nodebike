window.addEventListener("load", ()=>{
    //console.log('evento submit', campoUsuario, campoPassword);
    //alert('Evento submit');

    
  let loginForm = document.querySelector('.main-form');
   
  console.log(loginForm)
  loginForm.addEventListener("submit", (e) => {
      let errores = [];
      let campoUsuario = document.querySelector('#email');
      let campoPassword= document.querySelector('#password');
    //   console.log('evento submit 2', campoUsuario, campoPassword);
    //   alert('Evento submit');
    //   alert('Evento submit'+ campoUsuario + campoPassword);

      //VALIDANDO CAMPO USUARIO
      if(campoUsuario.value == ""){
          errores.push("Debe ingresar su nombre de usuario");
      } else if (campoUsuario.value.length < 3){
          errores.push("Recuerde: Su nombre de usuario contiene al menos 3 caracteres");
      }
      //VALIDANDO CAMPO DE PASSWORD
      if(campoPassword.value == ""){
          errores.push("Por favor ingrese su contraseña");
      }

      if(errores.length > 0){
          e.preventDefault();
          let ulErrores = document.querySelector('div.errores ul');
          ulErrores.innerHTML="";
          for(let i = 0; i<errores.length;i++){
              ulErrores.innerHTML+="<li>"+errores[i]+"</li>"
          }
      }
  });
});