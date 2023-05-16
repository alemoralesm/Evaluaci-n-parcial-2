const nombre = document.getElementById("nombre")
const apellidop = document.getElementById("apellidop")
const apellidom = document.getElementById("apellidom")
const rut = document.getElementById("rut")
const direccion = document.getElementById("direccion")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo= document.getElementById("warnings")

addEventListener("submit" , e =>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML=""
    if(nombre.value.length <4){
        alert("nombre invalido,(complete correctamente el registro)")
        entrar = true
    }
    if(apellidop.value.length <4){
        alert("apellido invalido,(complete correctamente el registro)")
        entrar= true
    }
    if(apellidom.value.length <4){
        alert("apellido invalido,(complete correctamente el registro)")
        entrar= true
    }
    if(!regexEmail.test(email.value)){
        alert("apellido invalido,(complete correctamente el registro)")
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Registrado"
    }
})

var validarRadio = function(e){
    if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
    } else{
        alert("completa el campo sexo");
        e.preventDefault();
    }
};