function validar() {
    var ret_email = validar_email();
    var ret_contra = validar_contraseña();
    var ret_contra2 = validar_contraseña2();
    var ret_num = validar_numero();
    var ret_direcc = validar_direccion();
    var ret_comuna = validar_comuna();
    var ret_hobbie = validar_hobbies();
    var ret_url = validar_url();
    return ret_email && ret_contra && ret_contra2 && ret_num && ret_direcc && ret_comuna && ret_hobbie && ret_url; 
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email")
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if(email == "") {
        div.innerText = "Este campo no puede estar en blanco.";
        div.className = "text-danger";
        return false;
    } else  {
        if (arroba < 2) {
            div.innerText = "El correo del correo no es valido.";
            div.className = "text-danger"
            return false;
        } else {
            if (arroba + 3 > punto || punto == email.length -1 ) {
                div.innerText = "El nombre de dominio no es valido."
                div.className = "text-danger";
                return false;
            }
            else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_contraseña() {
    var contraseña = document.getElementById("pass").value;
    var div = document.getElementById("err_pass")
    var tiene_digito = false;
    var tiene_letra = false;
    for (var i = 0; i < contraseña.length; i++) {
        var caracter = contraseña.charAt(i);
    if (!isNaN(caracter) && caracter !== " ") {
      tiene_digito = true;
    } else {
      tiene_letra = true;
    }
    }
    if (contraseña == "" ) {
        div.innerText = "Este campo no puede estar en blanco.";
        div.className = "text-danger";
        return false;
    } else if (contraseña.length < 3 || contraseña.length > 6){
        div.innerText = "Porfavor ingrese una contraseña entre 3 y 6 caracteres.";
        div.className = "text-danger";
        return false;
    } else if (tiene_digito == false || tiene_letra == false) {
        div.innerText = "La contraseña debe tener almenos un digito y una letra."
        div.className = "text-danger"
        return false;
    }else{
        div.innerText = "";
        return true
    }
};

function validar_contraseña2() {
    var contraseña = document.getElementById("pass").value;
    var confirm_contraseña = document.getElementById("confirm_pass").value;
    var div = document.getElementById("err_confirm_pass")
    if (confirm_contraseña == "" ) {
        div.innerText = "Este campo no puede estar en blanco.";
        div.className = "text-danger";
        return false;
    } else if (confirm_contraseña !== contraseña){
        div.innerText = "Las contraseñas no coinciden.";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true
    }
};

function validar_numero() {
    var numero = document.getElementById("numero").value;
    var div = document.getElementById("err_numero")
    if (numero == "") {
        div.innerText = "Este campo no puede estar en blanco."
        div.className = "text-danger"
        return false;
    } else if(isNaN(numero)){
        div.innerText = "Debes ingresar un numero válido. ej: 9 12345678"
        div.className = "text-danger"
    } else if (numero.length < 9 || numero.length > 10){
        div.innerText = "El numero debe tener entre 9 y 10 digitos."
        div.className = "text-danger"
        return false;
    } else {
        div.innerText = "";
        return true
    }
};

function validar_direccion() {
    var direccion = document.getElementById("direcc").value;
    var div = document.getElementById("err_direcc")
    var validar_digito = /\d/;
    var validar_caracter = /[a-zA-Z]/;
    if (direccion == "") {
        div.innerText = "Este campo no puede estar en blanco."
        div.className = "text-danger"
        return false;
    } else if (!validar_digito.test(direccion) || !validar_caracter.test(direccion)) {
        div.innerText = "La direccion debe contener calle y numero de domicilio. ej: Av. Picarte 123"
        div.className = "text-danger"
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna")
    if (comuna == "Seleccione una comuna...") {
        div.innerText = "Debe especificar su comuna."
        div.className = "text-danger"
        return false;
    } else {
        div.innerText =""
        return true;
    }
}

const hobbies = [];
function hobbies_push() {
    let input = document.getElementById("hobbies");
    var div_err = document.getElementById("err_hobbie")
    if (input.value == ""){
        div_err.innerText = "No puede agregar un campo vacio."
        div_err.className = "text-danger"
    } else {
        hobbies.push(input.value);
        input.value = "";
        div_err.innerText = ""
        let div = document.getElementById("lista");
        div.innerHTML = "";
        let ul = document.createElement("ul");
        div.appendChild(ul);
        for (let i = 0; i < hobbies.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = hobbies[i];
            ul.appendChild(li);
        }
        }
}

function validar_hobbies(){
    var lista = hobbies;
    var div = document.getElementById("err_hobbie")
    if (lista.length < 2) {
        div.innerText = "Debe ingresar al menos 2 hobbies."
        div.className = "text-danger"
        return false;
    } else {
        div.innerText =""
        return true;
    }
}


function mostrar_contraseña() {
    var contraseña = document.getElementById("pass");
    if (contraseña.type === "password") {
      contraseña.type = "text";
    } else {
      contraseña.type = "password";
    }
  }

  function mostrar_contraseña2() {
    var contraseña = document.getElementById("confirm_pass");
    if (contraseña.type === "password") {
      contraseña.type = "text";
    } else {
      contraseña.type = "password";
    }
  }

function validar_url() {
    var url = document.getElementById("web").value;
    var div = document.getElementById("err_web");
    var http = url.indexOf("https://www.")
    if (url == "") {
        div.innerText = ""
        return true;
    } else if (http == 0) {
        div.innerText = ""
        return true;  
    } else {
        div.innerText = "Url invalido. ej: https://www.instagram.com/user/"
        div.className = "text-danger"
        return false;
    }
}
