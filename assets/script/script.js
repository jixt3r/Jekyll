var momento;
var horas;
var minutos;
var segundos;
var segundoAnterior;

segundoAnterior = 72;

moveMinutosEHoras();
moveSegundos();

function moveMinutosEHoras() {
    momento = new Date();
    horas = momento.getHours();
    minutos = momento.getMinutes();
    let rotateHoras = "rotate(" + (horas * 30 + minutos * 0.5) + "deg)";
    let rotateMinutos = "rotate(" + minutos * 6 + "deg)";
    document.getElementById("ponteiro-horas").style.transform = rotateHoras;
    document.getElementById("ponteiro-minutos").style.transform = rotateMinutos;
}

function moveSegundos() {
    momento = new Date();
    segundos = momento.getSeconds();
    let rotateSegundos = "rotate(" + segundos * 6 + "deg)";
    document.getElementById("ponteiro-segundos").style.transform = rotateSegundos;
    if(segundoAnterior == 59) {
        moveMinutosEHoras();
    }
    segundoAnterior = segundos;
}

setInterval(moveSegundos, 999);