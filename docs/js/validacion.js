/* let form = document.getElementById("formulario");
localStorage.setItem("submit", false);*/

(function () {
   'use strict' 


var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
.forEach(function (form) {
    form.addEventListener('submit', function(event){
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
}, false)
});
})()

function validacion(){

    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terms = document.getElementById("checkbox").checked;


    if (terms==false){
        document.getElementById("termsNotChecked").innerHTML = "Debe aceptar los términos del servicio";
        document.getElementById("termsNotChecked2").innerHTML = "Debe aceptar los términos del servicio";
    }

        if(formulario.checkValidity() && password2===password1 && terms==true){
            document.getElementById("formulario").reset();
            terms.checked =false;
            
            document.getElementById("invalidPassword").innerHTML=""
            console.log("Formulario enviado");  

        } else if(!password2===password1){
            
            console.log("contraseñas distintas");   
        }
    
}

function checkCheckbox(){
    let terms = document.getElementById("checkbox").checked;
    if (terms==true){
        document.getElementById("termsNotChecked").innerHTML="";
        document.getElementById("termsNotChecked2").innerHTML="";
    }
}
function onChange() {
    
    const password = document.getElementById('password1');
    const confirm = document.getElementById('password2');

    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
      document.getElementById("invalidPassword").innerHTML = ""
      console.log("si coinciden")
    } else {
      confirm.setCustomValidity('Las contraseñas no coinciden');
      document.getElementById("invalidPassword").innerHTML = "Las contraseñas deben ser iguales"
      console.log("no coinciden")
    }
  }