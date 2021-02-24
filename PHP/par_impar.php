<?php

/* Crie um array com 10 números, use um estrutura de repetição 
( for, foreach, while ) 
para verificar se o número é par ou impar, 
caso seja par faça um print do número. */

$numeros = [35, 2, 23, 55, 66, 32, 8, 7, 16, 1, 27, 43, 29];
$pares = [];
$impares = [];

foreach($numeros as $numero){    
    if($numero % 2 === 0){
        array_push($pares, $numero);  
    }
}
print_r($pares);

foreach($numeros as $numero){
    if($numero % 2 === 1){
        array_push($impares, $numero);
    }
}
print_r($impares);


?>