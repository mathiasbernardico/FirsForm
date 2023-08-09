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
    showAlertError();
    return false;
  }else if (nombre != ''&&apellido != ''&&email != ''&&password1 != ''&&password2 != ''&&terminos){
    return true;
  }
}
function errorContraseña() { 
    let password1 = document.getElementById("password1").value; let password2 = document.getElementById("password2").value; if ((password1 !== password2)) { 
        showAlertError(); } 
    else if (password1 === password2){ 
        showAlertSuccess() 
    } 
} 
document.getElementById("regBtn").addEventListener("click", errorContraseña);
