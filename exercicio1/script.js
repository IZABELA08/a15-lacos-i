let coxinha = prompt('Deseja uma coxinha? sim [S] / não [N] : ')
let conta = 0

while(coxinha == "s"){
    conta = conta + 2.50
    coxinha = prompt('Deseja mais uma coxinha? [S]sim / [N]não')

}
alert('Sua conta é de ' + conta)