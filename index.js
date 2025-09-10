const dia = "Segunda";
let nomeDia;
switch(dia) {
    case "Domingo": nomeDia = 1;
    break;
    case "Segunda": nomeDia = 2;
    break;
    case "Terca": nomeDia = 3;
    break;
    case "Quarta": nomeDia = 4;
    break;
    case "Quinta": nomeDia = 5;
    break;
    case "Sexta": nomeDia = 6;
    break;
    case "Sábado": nomeDia = 7;
    break;
    default: nomeDia = "Dia inválido"
}
console.log(nomeDia)
