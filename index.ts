let primeiroNumero: number = 100;
let segundoNumero: number = 300;

console.log(primeiroNumero+segundoNumero);

let idade:number = 16;
let texto:string = "Minha idade é: "  +  idade + " anos";

console.log(texto);

let idadeNova:number = 16;
let textoNovo:string = "Minha idade é: ";

console.log(textoNovo + idadeNova);

let verdadeiro:boolean = true;

console.log(verdadeiro);

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 98];

console.log (arr);
console.log ("Tamanho do array: " + arr.length);
console.log ("acessando a posição do array:" + arr[8]);
console.log(arr.indexOf(8));

let arrayTexto:Array<string>;
arrayTexto = ['ab', 'de', 'c', 're'];

console.log (arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('de'));

function exibirTexto(){
    console.log('Exibindo meu Texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto"
}

console.log(exibirOutroTexto());

function retornaNumero():number{
    return 100;
}

console.log (retornaNumero())

function retornaTexto(): string {
    return "retornando string";
}

console.log (retornaTexto());

function soma( a:number, b:number):number{
    return a+b
}

console.log(soma(50,90))

function multiplicar(a:number, b:number):number{
    return a * b
}
console.log(multiplicar(3,5));

function formula(a:number, b:number, c:number):number{
    return (a+b)*c
}

console.log(formula(1,6,7));

function retorna( a:number, b:number): string{
    return "resultado da multiplicação é " + (a*b)
}

console.log (retorna(4,4))