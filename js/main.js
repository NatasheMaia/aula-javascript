
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada pelo click!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada pelo click!");
}


function redirecionar(){
    window.open("https://github.com/NatasheMaia");
    //window.location.href = "https://github.com/NatasheMaia";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Today is a good day to have a good day!<b>";
    elemento.innerHTML = "<b>Today is a good day to have a good day!<b>";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui:";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui:";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"banana", cor:"amarelo"}, {nome:"morango", cor:"vermelho"} ]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"banana", cor:"amarelo"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//= "Simone Maia";
//var idade = 34;
//var idade2 = 10;
//var frase = "slow progress is still progress."
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(nome.replace("Simone", "Natashe") + ", " + frase);
//alert(nome.replace("Simone", "Natashe") + ", " + frase);
