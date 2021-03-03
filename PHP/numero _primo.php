<!-- Crie um array com 10 números, use um estrutura de repetição e
 verifique se ele é um número primo ou não,
 se for mostre um print do número -->

<?php

function numeroPrimo($num)
{
    for($i=2; $i < $num; $i++){
        if($num % $i === 0){
            return false;
        }
    }
    return true;
}


function exibirNumerosPrimos()
{
    $numeros = [35, 2, 23, 55, 66, 32, 8, 7, 16, 1, 1, 27, 43, 29];
    $primos = [];
    foreach($numeros as $numero){
        if(numeroPrimo($numero) && $numero != 1){          
            array_push($primos, $numero);
        }
    }
    print_r($primos);
}

echo exibirNumerosPrimos();
?>