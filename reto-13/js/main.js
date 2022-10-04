function calculadoraInversa(num1, num2, signo) {
    switch (signo) {
        case "+":
            console.log(num1 + num2)
            break;
        case "-":
            console.log(num1 - num2)
            break;
        case "*":
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        case "^":
            console.log(num1 ** num2)
            break;
        case "%":
            console.log(num1 % num2)
            break;
        default:
        console.log("Introduzca número correcto")
            break;
    }
}

calculadoraInversa(2, 2, "^")

