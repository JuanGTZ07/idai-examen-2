var formulario;
formulario = document.getElementById("calculoMinutos");

function calcular() {
var total = 0;
var minutos = formulario.MinLlam.value;
total = minutos * 10;
var cliente = formulario.cliente.value;
alert(cliente);

if (formulario.plan.value == "ST") {
    //entra aqui porque es verdadera
    total = total + 200;
}

if (formulario.plan.value == "TI") {
    //entra aqui porque es verdadera
    total = total + 450;
}

if (formulario.plan.value == "TITV") {
    //entra aqui porque es verdadera
    total = total + 850;
}
alert(total);
}

