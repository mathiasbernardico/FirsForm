function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function Campos_no_vacios(){
    nombre = document.getElementById("nombre").value;
    apellido  = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    password1  = document.getElementById("password1").value;
    password2 = document.getElementById("password2").value;
    terminos = document.getElementById("terminos").checked;
  if (nombre == ''||apellido == ''||email == ''||password1 == ''||password2 == ''||terminos == false) {
    return false;
  }else {
    return true;
  }
  }
  

function errorContraseña() {
     var password1 = document.getElementById("password1").value; var password2 = document.getElementById("password2").value; 
     if ((password1 !== password2) || (password1.length < 6) || (password2.length < 6)) {
            return false;
        } else { 
            return true; 
        } 
    } 


function verificacion(){
     if(Campos_no_vacios() && errorContraseña()){ 
        showAlertSuccess();
    }else {
        showAlertError();
    } 
}


document.getElementById("regBtn").addEventListener("click", verificacion);

