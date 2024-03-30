function insert(number) {
    var num = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = num + number;
}

function limpar() {
    document.getElementById("resultado").innerHTML = "";
}

function back() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var entrada = document.getElementById("resultado").innerHTML;
    if (entrada) {
        document.getElementById("resultado").innerHTML = eval(entrada);
    } else {
        document.getElementById("resultado").innerHTML = "Erro.";
    }
}
