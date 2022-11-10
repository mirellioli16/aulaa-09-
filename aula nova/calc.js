function divisaoReal(){
    resultado = n1 /n2;
    //mostrando o resultado usando template strings
    alert(`${n1} / ${n2} = ${resultado}`);
    // dando a opção de chamar uma nova operação

}
function divisaoInteira() {
    resultado = n1 % n2;
    // mostrando o resultado usando template strings
    alert(`o resto da divisao entre ${n1} e % ${n2} é igual $`);
    // dando a opção de chamar uma nova operação
    novaOperacao();
}
function potenciacao() {
    resultado = n1 ** n2;[]
    // mostrando o resultado usando template strings
    alert(`${n1} elevado à ${n2} ª potêcia é ${resultado}`);
    // dando a opção de chamar uma nova operação
    novaOperacao();
}
// nova operação
function novaOperacao (){
    let opcao = prompt(`Deseja fazer outra operação?/n 1 - sim/n 2 - não`);
        if (opcao == 1) {
            calculadora();

        }else if (opcao == 2){
            alert('até mais!')

        }else {
            alert('digite uma opção válida!');
            novaOperacao();
        }
     }
    }
}
// escolhendo uma operação
// usando if && else
if (operacao == 1) {
soma();
}else if  (operacao == 2) {
subtracao () ;

}else if  (operacao == 3 ){
multiplicacao();
}else if  (operacao == 4) {
divisaoReal ();
}else if  (operacao == 5) {
divisaoInteira();
}else if  (operacao == 6) {
potenciacao();
}

// usando switch case como alternativa (comentar um dos dois)
/*
switch (operacao){
case1:
soma()
break;
case2
subtração();
breack;
case3
multiplicaçao();
case4
divisaoReal()
break;
case5
divisaoInteira()
break;
case6
potenciacao();
break;
} */

}
calculadora();

