//Declaração de variáveis
var i = 0;
var msg = "";
var opcao = 0;
var n = 0;
var f = 0;


//Inicio do chamar menu
function menu(){

    this.opcao = prompt("----MENU----\n"     +
                "0. Sair\n"                  +
                "1. Exercício  01\n"          +
                "2. Exercício  02\n"          +
                "3. Exercício  03\n"          +
                "4. Exercício  04\n"          +
                "5. Exercício  05\n"          +
                "6. Exercício  06\n"          +
                "7. Exercício  07\n"          +
                "8. Exercício  08\n"          +
                "9. Exercício  09\n"          +
                "10. Exercício 10\n"         +
                "11. Exercício 11\n"         +
                "12. Exercício 12\n"         +
                "13. Exercício 13\n"         +
                "14. Exercício 14\n"         +
                "15. Exercício 15\n"         +
                "16. Exercício 16\n"         +
                "17. Exercício 17\n"         +
                "18. Exercício 18\n"         +
                "19. Exercício 19\n"         +
                "20. Exercício 20\n"         +
                "21. Exercício 21\n"         +
                "22. Exercício 22\n"         +
                "23. Exercício 23\n"         +
                "24. Exercício 24\n"         +
                "25. Exercício 25\n"         +
                "Escolha uma das opções" );

}//Fim da função menu

function operacao(){

    menu();//Chamar menu de opções

    //Inicio do switch case
    switch(this.opcao){

        case '0':
            console.log("Obrigado!");
            break;
        case '1':
            console.log(exercicio01());
            break;
        case '2':
            console.log(exercicio02());
            break;
        case '3':
            console.log(exercicio03());
            break;
        case '4':
            console.log(exercicio04());
        break;
        case '5':
            console.log(exercicio05());
            break;
        case '6':
            console.log(exercicio06());
            break;
        case '7':
            console.log(exercicio07());
            break;
        case '8':
            console.log(exercicio08());
            break;
        case '9':
            console.log(exercicio09());
            break;
        case '10':
            console.log(exercicio10());
        break;
        case '11':
            console.log(exercicio11());
            break;
        case '12':
            console.log(exercicio12());
            break;
        case '13':
            console.log(exercicio13());
            break;
        case '14':
            console.log(exercicio14());
            break;
        case '15':
            console.log(exercicio15());
            break;
        case '16':
            console.log(exercicio16());
        break;
        case '17':
            console.log(exercicio17());
            break;
        case '18':
            console.log(exercicio18());
            break;
        case '19':
            console.log(exercicio19());
            break;
        case '20':
            console.log(exercicio20());
            break;
        case '21':
            console.log(exercicio21());
        break;
        case '22':
            console.log(exercicio22());
            break;
        case '23':
            console.log(exercicio23());
            break;
        case '24':
            console.log(exercicio24());
            break;
        case '25':
            console.log(exercicio25());
            break;
        default:
            console.log("Escolha uma opção válida!");
            break;

    }//Fim do switch    
}//Fim da função operação



//inicio dos exercicios
function exercicio01(){
    
    var a = 10;
    var b = 20;
    
    mesagem = "Antes da troca. \nA = " + a + "\nB = " + b;

    var aux = a;

    var a = b;
    var b = aux;

    console.log(mesagem + "\ne após a troca ficou. \nA =  " + a + "\nB = " + b);

}

function exercicio02(){

    var num1 = parseFloat(prompt("Digite um valor: "));

    var final = num1 - 1;

    console.log("O valor digitado foi: " + num1 + " e o seu antecessor é: " + final);
}

function exercicio03(){

    var bas = parseFloat(prompt("Digite o valor da base: "))
    var alt = parseFloat(prompt("Digite o valor da altura: "))

    retan = bas * alt;

    console.log("O valor do retâgulo é: " + retan);
}

function exercicio04(){

    var anos = parseFloat(prompt("Digite sua idade completa (anos): "))
    var meses = parseFloat(prompt("Digite quantos meses você tem (sem contar os anos completos): "))
    var dia = parseFloat(prompt("Digite a quantidade de dias que você tem completos: "))

    var idade = (anos * 365) + (meses * 30) + dia

    console.log("A sua idade em dias corridos é: " + idade);
}

function exercicio05(){

    var eleitores = parseFloat(prompt("Quantos eleitores tem no se município? "))
    var brancos = parseFloat(prompt("Digite o valor de votos em brancos: "))
    var nulos = parseFloat(prompt("Digite o valor de votos nulos: "))

    var percent1 = brancos / eleitores * 100
    var percent2 = nulos / eleitores * 100
    var percent3 = eleitores - (brancos + nulos)
    var percent4 = percent3 / eleitores * 100

    console.log("Segue o resultado das eleções: \nTotal de eleitores: " + eleitores + "\nTotal de votos em brancos: " + brancos + "\nPercentual Brancos:  " + percent1 + 
    "%\nTotal de votos nulos: " + nulos + "\nPercentual de votos nulos: " + percent2 +  "%\nTotal de votos validos: " + percent3 + "\nPercentual votos válidos: " + percent4 + "%");

}
function exercicio06(){

    var sal = parseFloat(prompt("Qual valor do salário do colaborador(a): "));
    var aumento = sal * 1.15;

    console.log("O valor do aumento do colaborador(a) é: R$ " + aumento.toFixed(2));
}

function exercicio07(){

    var custoFab = parseFloat(prompt("Digite o valor de fábrica do carro? "));
    var percenDistr = custoFab * 0.28;
    var percenImpost = custoFab * 0.45;
    var valorFinal = percenDistr + percenImpost + custoFab

    console.log("O valor final do carro é: R$" + valorFinal.toFixed(2));

}

function exercicio08(){

    var n1 = parseFloat(prompt("Digite a 1° nota do aluno(a): "));
    var n2 = parseFloat(prompt("Digite a 2° nota do aluno(a): "));
    var n3 = parseFloat(prompt("Digite a 3° nota do aluno(a); "));

    var media = (n1 + n2 + n3) / 3;
    
    console.log("A média do aluno é: " + media.toFixed(2));
}

function exercicio09(){

    var maca = parseFloat(prompt("Quantas maças o senhor(a) quer comprar? "));
    var valor1 = 1.30;
    var valor2 = 1.00;

    if(maca > 11){
        
        var vfinal = maca * valor2;

        console.log("Devido ter comprado " + maca + " unidades de maça, o valor da unidade ficou: R$" + valor2 + " .Com isso sua conta ficou no total de: R$" + vfinal + ".");
    
    }else{

        var vfinal = maca * valor1;

        console.log("Devido ter comprado " + maca + " unidades de maça, o valor da unidade ficou: R$" + valor1 + " .Com isso sua conta ficou no total de: R$" + ".");

    }

}

function exercicio10(){

    var sal = parseFloat(prompt("Digite o salário do colaborador(a): R$"));
    var vendas = parseFloat(prompt("Digite o valor total de vendas do colaborador(a): R$"));

    if(vendas > 1500.00){

        var salFinal = (vendas * 0.5) + sal;

        console.log("Devido o colaborador(a) ter vendido " + vendas + ". O salário terá um acrescimo de 5% em relação ao total de vendas, sendo assim o valor a receber esse mês é: R$" + salFinal + ".");

    }else{

        var salFinal = (vendas * 0.3) + sal;

        console.log("Devido o colaborador(a) ter vendido " + vendas + ". O salário terá um acrescimo de 3% em relação ao total de vendas, sendo assim o valor a receber esse mês é: R$" + salFinal + ".");

    }

}

function exercicio11(){

    var nconta = parseInt(prompt("Digite o número da conta: "));
    var saldo = parseFloat(prompt("Digite o saldo da conta: R$"));
    var debito = parseFloat(prompt("Digite o valor gasto em débito: R$"));
    var credito = parseFloat(prompt("Digite o valor de crédito: R$"));

    var saldoAtual = saldo - debito + credito

    if(saldoAtual >= 0){

        console.log("PARABÊNS! Seu saldo é POSITIVO!!!");

    }else{

        console.log("PERIGO! seu saldo é NEGATIVO!!!");

    }

}

function exercicio12(){

    var n1 = parseInt(prompt("Digite um número inteiro (entre 1 e 10): "));

    if(n1 <= 10){
    console.log("Tabuada do " + n1 + ": \n")
    for(i = 0; i <= 10; i++){
        msg += n1 + "x" + i + "=" + (n1) * (i) + "\n";
    }

    console.log(msg + "\n");

    }else{
        
        console.log("Digite um número válido (entre 1 até 10).")
    
    }    

}

function exercicio13(){

    console.log("Não consegui realizar o exercício")


}

function exercicio14(){

    var n1  = parseFloat(prompt("Digite o 1° valor:  "));
    var n2  = parseFloat(prompt("Digite o 2° valor:  "));
    var n3  = parseFloat(prompt("Digite o 3° valor:  "));
    var n4  = parseFloat(prompt("Digite o 4° valor:  "));
    var n5  = parseFloat(prompt("Digite o 5° valor:  "));
    var n6  = parseFloat(prompt("Digite o 6° valor:  "));
    var n7  = parseFloat(prompt("Digite o 7° valor:  "));
    var n8  = parseFloat(prompt("Digite o 8° valor:  "));
    var n9  = parseFloat(prompt("Digite o 9° valor:  "));
    var n10 = parseFloat(prompt("Digite o 10° valor: "));

    var total = 0;

    if(n1 < 0 ){
        
        var total = total + 1

    }if(n2 < 0 ){

        var total = total + 1

    }if(n3 < 0 ){

        var total = total + 1

    }if(n4 < 0 ){
    
        var total = total + 1

    }if(n5 < 0 ){

        var total = total + 1

    }if(n6 < 0 ){

        var total = total + 1

    }if(n7 < 0 ){

        var total = total + 1

    }if(n8 < 0 ){

        var total = total + 1

    }if(n9 < 0 ){

        var total = total + 1

    }if(n10 < 0 ){

        var total = total + 1

    }else{
        
        var total = total + 0
    
    }
    console.log("Os números digitados são: \n" + n1 + "\n " + n2 +
        "\n"  + n3 + "\n" + n4 + "\n" + n5 + "\n" + n6 + "\n" + n7 + "\n" + 
        n8 + "\n" + n9 + "\n" + n10 + "e desse total de números " + total + ", são negativos.");

}

function exercicio15(){

    var n1  = parseFloat(prompt("Digite o 1° valor:  "));
    var n2  = parseFloat(prompt("Digite o 2° valor:  "));
    var n3  = parseFloat(prompt("Digite o 3° valor:  "));
    var n4  = parseFloat(prompt("Digite o 4° valor:  "));
    var n5  = parseFloat(prompt("Digite o 5° valor:  "));
    var n6  = parseFloat(prompt("Digite o 6° valor:  "));
    var n7  = parseFloat(prompt("Digite o 7° valor:  "));
    var n8  = parseFloat(prompt("Digite o 8° valor:  "));
    var n9  = parseFloat(prompt("Digite o 9° valor:  "));
    var n10 = parseFloat(prompt("Digite o 10° valor: "));

    var total = 0;

    if(n1 < 40 ){
        
        var total = total + n1

    }if(n2 < 40 ){

        var total = total + n2

    }if(n3 < 40 ){

        var total = total + n3

    }if(n4 < 40 ){
    
        var total = total + n4

    }if(n5 < 40 ){

        var total = total + n5

    }if(n6 < 40 ){

        var total = total + n6

    }if(n7 < 40 ){

        var total = total + n7

    }if(n8 < 40 ){

        var total = total + n8

    }if(n9 < 40 ){

        var total = total + n9

    }if(n10 < 40 ){

        var total = total + n10

    }else{
        
        var total = total + 0
    
    }
    console.log("Os valores digitados foram: \n\n" + 
    n1 + "\n" + n2 + "\n" + n3 + "\n" + n4 + "\n" + n5 + "\n" + n6 + "\n"
    + n7 + "\n" + n8 + "\n" + n9 + "\n" + n10 + "\ne a soma dos números inferiores a 40 é: " + total);

}

function exercicio16(){

    console.log("Não consegui realizar o exercício")

}

function exercicio17(){

    console.log("Não existe o exercício")

}

function exercicio18(){

    var a = parseInt(prompt("Digite o 1° número: "));
    var b = parseInt(prompt("Digite o 2° número: "));
    var c = parseInt(prompt("Digite o 3° número: "));

    var maior = 0;
    media = (a + b + c) / 3

    if(a > b){
        maior = a;
    }if(b > a){
        maior = b;
    }if(c > b){
        maior = c;
    }else{
        (c > a)
        maior = c
    }

    console.log("Os números digitados foram: \n" + a + "\n" + b + "\n" + c + "\nE a média é: " + media + 
    "\nE o maior valor entre os números é: " + maior);

}

function exercicio19(){
    
    var n1 = parseFloat(prompt("Digite a nota do 1° aluno(a): "));
    var n2 = parseFloat(prompt("Digite a nota do 2° aluno(a): "));
    var n3 = parseFloat(prompt("Digite a nota do 3° aluno(a): "));
    var n4 = parseFloat(prompt("Digite a nota do 4° aluno(a): "));
    var n5 = parseFloat(prompt("Digite a nota do 5° aluno(a): "));
    var n6 = parseFloat(prompt("Digite a nota do 6° aluno(a): "));
    var n7 = parseFloat(prompt("Digite a nota do 7° aluno(a): "));
    var n8 = parseFloat(prompt("Digite a nota do 8° aluno(a): "));
    var n9 = parseFloat(prompt("Digite a nota do 9° aluno(a): "));
    var n10 = parseFloat(prompt("Digite a nota do 10° aluno(a): "));
    var n11 = parseFloat(prompt("Digite a nota do 11° aluno(a): "));
    var n12 = parseFloat(prompt("Digite a nota do 12° aluno(a): "));
    var n13 = parseFloat(prompt("Digite a nota do 13° aluno(a): "));
    var n14 = parseFloat(prompt("Digite a nota do 14° aluno(a): "));
    var n15 = parseFloat(prompt("Digite a nota do 15° aluno(a): "));
    var n16 = parseFloat(prompt("Digite a nota do 16° aluno(a): "));
    var n17 = parseFloat(prompt("Digite a nota do 17° aluno(a): "));
    var n18 = parseFloat(prompt("Digite a nota do 18° aluno(a): "));
    var n19 = parseFloat(prompt("Digite a nota do 19° aluno(a): "));
    var n20 = parseFloat(prompt("Digite a nota do 20° aluno(a): "));

    var media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14 + n15 + n16 + n17 + n18 + n19 + n20) / 20;

    console.log("A média foi: " + media);

}

function exercicio20(){

    var person1 = parseInt(prompt("Quantos filhos(a) você tem? "));
    var person2 = parseFloat(prompt("Qual valor do seu salário? "));

    var person3 = parseInt(prompt("Quantos filhos(a) você tem? "));
    var person4 = parseFloat(prompt("Qual valor do seu salário? "));

    var person5 = parseInt(prompt("Quantos filhos(a) você tem? "));
    var person6 = parseFloat(prompt("Qual valor do seu salário? "));

    var person7 = parseInt(prompt("Quantos filhos(a) você tem? "));
    var person8 = parseFloat(prompt("Qual valor do seu salário? "));

    var person9 = parseInt(prompt("Quantos filhos(a) você tem? "));
    var person10 = parseFloat(prompt("Qual valor do seu salário? "));

    var mediaSal = (person2 + person4  + person6 + person8 + person10) / 5;
    var mediaFilhos = (person1 + person3 + person5 + person7 + person9 ) / 5;
    var menorSal = 0;
    var maiorSal
   

    if(person2 < 150){
        
        menorSal = menorSal + 1;

    }if(person4 < 150){

        menorSal = menorSal + 1;

    }if(person6 < 150){

        menorSal = menorSal + 1;

    }if(person8 < 150){

        menorSal = menorSal + 1;

    }if(person10 < 150){

        menorSal = menorSal + 1;

    }

    var percen = (menorSal / 5) * 100;

    console.log("A média salárial da população da cidade é: R$" + mediaSal + ". A média de filhos é: " + mediaFilhos + ". E o percentual de pessoas com salário menor que R$150 é: " + percen);

}


function exercicio21(){

    var raio = parseFloat(prompt("Digite o valor do raio: "));
    var area = 3.14159 * (raio ** 2);

    console.log("A circuferência da área é: " + area.toFixed(2));

}

/*function exercicio22(){

    //HT = horas trabalhadas
    //VH = Valor da hora
    //PD = Percentual de desconto
    //SB = Salário bruto
    //TD = Total de desconto
    //SL = Salário líquido

    var horasmin = 

    var horasTrabal = ("Digite a quantidade de horas trabalhadas no mês(exemplo: 12:00): ");
    var minuTrabal = ("Digite a quantidade de minutos trabalhados: ");


}*/


//chamar o método operação
operacao();

