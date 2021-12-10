let numeroDeAlunos = 10;

console.log("Aplicando for:")

//usando o for
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)
    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 == 0) {
        //usando concatenação
        console.log("O número " + contador + " é Par")
    } else {
        //usando irterpolação
        console.log(`O número ${contador} é Ímpar`)
    }
}

console.log("Aplicando for:")

//outro exemplo de for
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)
    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 != 0) {
        console.log("O número " + contador + " é Ímpar")
    } else {
        console.log(`O número ${contador} é Par`)
    }
}

console.log("Aplicando while:")

//usando o while
let contador = 0;

while (contador <= numeroDeAlunos) {
    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é Par")
    } else {
        console.log(`O número ${contador} é Ímpar`)
    }
    contador++;
}

console.log("Exemplo de for of:")

//usando o for of
let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}
