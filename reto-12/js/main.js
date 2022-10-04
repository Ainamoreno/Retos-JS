let contraseña = prompt("Introduzca la constraseña");

let validarContraseña = prompt("Valide la contraseña");

if (validarContraseña == contraseña) {
    console.log("Enhorabuena");

} else {
    for (let i = 3; i >= 1; i--) {
        if (validarContraseña == contraseña) {
            console.log("Enhorabuena");
        } else {
            console.log("Vuelve a intentarlo. Te quedan ", i, "intentos.")
            validarContraseña = prompt("Valide la contraseña");
        }
    }
}


