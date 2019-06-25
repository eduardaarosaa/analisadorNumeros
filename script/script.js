let num = document.getElementById("txt1");
let lista = document.querySelector("select#lista");
let res = document.getElementById("res");
let valores = [];

function isNumbero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, lista) {

    if (lista.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function addnumeros() {
    if (isNumbero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = "";
    } else {
        window.alert("Valor inválido ou já encontrado na lista");
    }
}

function finalizar() {

    if (valores.length == 0) {
        window.alert("Adicione valores");
    } else {
        let lot = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
             if (valores[pos] < menor)
            menor = valores[pos];
        }
        media = soma/lot;

        res.innerHTML = ""
        res.innerHTML += `Ao todo temos ${lot} adicionados <br>`;
        res.innerHTML += `O maior número é ${maior} <br>`;
        res.innerHTML += `O menor número é ${menor} <br>`; 
        res.innerHTML += `Somando todos os valores, o resultado é ${soma} <br>`;
        res.innerHTML += `O resultado da média de todos os número é ${media}`;
    }
}