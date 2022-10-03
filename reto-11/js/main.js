let dia = prompt("Introduce un día de la semana");

switch (dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Día laboral")
        break;

    case "sábado":
    case "domingo":
        console.log("Día no laboral")
        break;
    default:
        console.log("Introduzca un día válido")

}