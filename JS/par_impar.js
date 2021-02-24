/* - Crie um array com 10 números, use um estrutura de repetição 
( for, foreach, while ) 
para verificar se o número é par ou impar, 
caso seja par faça um print do número. */


let numeros = [35, 2, 23, 55, 66, 32, 8, 7, 16, 1, 1, 27, 43, 29]

numeros.forEach(par => {
    if(par % 2 === 0){
        console.log(par)  
    }    
})

numeros.forEach(impar => {
    if(impar % 2 ===1){
        console.log(impar)
    }
})