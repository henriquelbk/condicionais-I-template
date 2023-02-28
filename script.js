const velocidade = 67

if (velocidade >= 100) {
    console.log('ta rapido demais, vai tomar multa')
} else {
    console.log('ta de boa, segue')
}

const la = false
const ele = true
const booleano3 = false

/*if (la) {
    alert('la é true')
} else {
    alert('la é false')
}
*/

if (la === ele) {
    alert('la e ele são iguais')
} else if (ele === booleano3) {
    alert('ele e booleano 3 são iguais')
} else if (la === booleano3) {
    alert('la e booleano3 são iguais')
}

const verificaVoto = () => {

const idade = Number(prompt('Qual é sua idade?'))

if (idade >= 18 && idade < 70) {
    console.log('Você é obrigado a votar')
} else if (idade >=16 || idade >= 70) {
    console.log('Você pode votar')
} else if (idade < 16) {
    console.log('Você não pode votar')
}
}

verificaVoto()

/*
Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10
Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada
Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida
Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”.
Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Es
Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Estudante reprovade”.
Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida.
*/

const media = 9

if (media >= 5 && media <= 10) {
    console.log('aprovado')
} else if (media >= 3 && media < 5) {
    console.log('em recuperação')
} else if (media < 3) {
    console.log('reprovado')
} else {
    console.log('dado invalido')
}