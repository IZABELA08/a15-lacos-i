// PRIMEIRO COD
// let coxinha = prompt('Deseja uma coxinha? sim [S] / não [N] : ')
// let conta = 0

// while(coxinha == "s"){
//     conta = conta + 2.50
//     coxinha = prompt('Deseja mais uma coxinha? [S]sim / [N]não')
// }
// alert('Sua conta é de: ' + conta)

// SEUNGA TENTATIVA
let question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
let count = 0

while (question !== 'N' || question === 'S') {
    question === 'S' ? count += 2.5 : console.log('Dígito inválido.')
    question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
}

console.log(`O valor total foi de R$${count}`)