
const inputMensaje = document.querySelector("#mensaje")
const inputResultado = document.querySelector("#resultado")

function encriptar() {
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "ines")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    
    document.querySelector("#p-resultado").style.display = "none";
    document.querySelector("#contenedor-copiar").style.display = "inherit";
    document.querySelector("#contenedor-copiar").style.display = "show";
    

    const caracteresNoValidos = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0123456789\^$.°"%&#*+=:@>´¨`^;:|\\/()\[\]{}]/;

    if (caracteresNoValidos.test(mensaje)){
        swal({
            title: "Texto No Valido",
            text: "Por favor intentalo solo con minusculas y sin acentos",
            icon: "error"
        });
    }

    if (mensajeEncriptado != ""){
        document.querySelector("#resultado").innerHTML = mensajeEncriptado
        document.querySelector("#mensaje").value = "";
    }

    else{
        swal({
            title: "Sin Texto",
            text: "Por favor ingresa un texto valido",
            icon: "error"
        });
    }

    inputResultado.value = mensajeEncriptado;
}

function desencriptar() {
    var mensajeEncriptado = inputMensaje.value.toLowerCase();
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("ines", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    
    if (mensajeEncriptado != ""){
        document.querySelector("#resultado").innerHTML = mensaje
        document.querySelector("#mensaje").value = "";
    }
    else{
        swal({
            title: "Sin Texto",
            text: "Por favor ingresa un texto valido",
            icon: "error"
        });
    }
    inputResultado.value = mensaje;
}

function copiar() {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    swal({
        title: "Texto Copiado",
        icon: "success"
    });
}

const botonEncriptador = document.querySelector("#encriptador")
const botonDesencriptador = document.querySelector("#desencriptador")
const botonCopiador = document.querySelector("#copiador")


botonEncriptador.onclick = encriptar;

botonDesencriptador.onclick = desencriptar;

botonCopiador.onclick = copiar;
