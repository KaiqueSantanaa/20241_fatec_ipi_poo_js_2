//funçoes

const ehpar = n => {n%2 === 0}
console.log(ehpar(10))
// const umArgumento = n => {
//     console.log(n)
// }
// const f  = () => {

//     //arrow function
// }
// console.log(umArgumento(12))
// const dobro = function(n){
//     return 2*n
// //util pra quando quiser passar uma função como parametro pra outra função 
// }

// const result = dobro(6)
// console.log(result)

// function hello(){
        
//     console.log("hello")                    
// }
// hello()
// function hello(nome){
//     console.log("oi " + nome)
// }
// hello("kaique")
// não faça comparações com == e sim com ===
// const n1 = 2
// const n2 = "3"
// //coerção implicita
// // const n3 = n1 + n2
// // console.log(n3)//n1 é transformado em string e depois concatenado com o n2
// const n3 = n1 + Number(n2)// coerção explicita para number alterando a saida para um resultado aritmético
// console.log(n3)

// var idade = 18
// //içada pra cá
// //var nome = `joão`
// console.log(`oi, ${nome}`)
// if(idade >= 18 ){
//     var nome = `joão`//o var causa o içamento da variavel nome, é como se ela tivesse sido declarada na ordem correta
//     console.log(`pode ${nome} dirigir`)
// }
// console.log(`Tchau ${nome}`)

//var permite declarações de variáveis identicas no mesmo escopo
// var linguagem = "Javascript"
// console.log(`aprendendo ${linguagem}`)
// var linguagem = "Java"
// console.log(`aprendendo ${linguagem}`)

//LET é dinamicamente tipado, feito pelo interpretador em tempo de execução
// let nome = 'rodrigo'
// console.log(nome)
// nome = 'kaio'
// console.log(nome)



//Qual o tipo de a
//Na verdade o objeto referenciado por nome muda momento da atribuição (o objeto muda e não o tipo)
// let a = 2
// console.log(typeof(a))
// a = 'abc'
// console.log(typeof(a))
// a = true
// console.log(typeof(a))    

// //declaração de constantes 
// const nome = "josé"
// console.log(nome)
// const endereco = 'rua B, 2'
// console.log (endereco)
// const sobrenome = 'Bossini'
// console.log(sobrenome)
// //interpolação
// console.log(`me chamo ${nome} meu sobrenome é ${sobrenome}`)
// const idade = 18
// const passeDeAno = true


