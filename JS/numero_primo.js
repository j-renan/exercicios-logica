/* - Crie um array com 10 números, use um estrutura de repetição e
 verifique se ele é um número primo ou não,
 se for mostre um print do número */

let numeros = [35, 2, 23, 55, 66, 'oi', 32, 8, 7, 16, 1, 1, 27, 43, 29]

function numeroPrimo(num){
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false
    }
  return true
}

function exibirNumPrimo(array = []){
  let primos = []

  array.map(valor => {
    if (numeroPrimo(valor) && valor != 1 && typeof(valor) === 'number') {
      primos.push(valor)
    }
  })
  primos.sort((a,b)=>a-b)
  console.log('São primos: ', primos)
}

exibirNumPrimo(numeros)