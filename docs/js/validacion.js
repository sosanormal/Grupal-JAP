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