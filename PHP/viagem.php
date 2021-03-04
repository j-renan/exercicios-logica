<!-- ## Viagem

Cássio precisa alugar um carro para uma viagem de 3500 km, calcule o total de gasto 
que vai ter conforme os dados a seguir:

- Fusca 6 km/L Gasolina - 8 km/L Etanol, 12 dias de aluguel, valor por dia R$ 45,00
- Gol 10 km/L Gasolina - 9 km/L Etanol, 10 dias de aluguel, valor por dia R$ 63,00
- Polo 9 km/L Gasolina - 8 km/L Etanol, 9 dias de aluguel, valor por dia R$ 89,00
- Uno 15 km/L Gasolina - 12 km/L Etanol, 9 dias de aluguel, valor por dia R$ 75,00

**Construa uma estrutura onde ao final faça o print de cada veículo com seus valores 
de gasolina, etanol e diária gasta**, exemplo: Fusca gasta 59,00 de gasolina ou 45 de 
etanol e total de 205,00 de diária. Ao final ordene os dados pelo carro que tem o menor 
valor total de diária para aquele que tem o maior valor.
-->

<?php

$dadosCarros = [
    ["modelo" => "Fusca", "consumo_gasolina" => 6, "consumo_alcool" => 8, "dias_aluguel" => 12, "valor_diaria" => 45],
    ["modelo" => "Gol", "consumo_gasolina" => 10, "consumo_alcool" => 9, "dias_aluguel" => 10, "valor_diaria" => 63],
    ["modelo" => "Polo", "consumo_gasolina" => 9, "consumo_alcool" => 8, "dias_aluguel" => 9, "valor_diaria" => 89],
    ["modelo" => "Uno", "consumo_gasolina" => 15, "consumo_alcool" => 12, "dias_aluguel" => 9, "valor_diaria" => 75]
];

$orcamento = [];
const DISTANCIA = 3500;
const PRECO_GASOLINA = 5;
const PRECO_ALCOOL = 3.29;

foreach($dadosCarros as $carro){
    $custoCarro = [
        "modelo" => $carro["modelo"],
        "custo_gasolina" => "R$ " . number_format((DISTANCIA / $carro["consumo_gasolina"]) * PRECO_GASOLINA,2,',',''),
        "custo_alcool" => "R$ " . number_format((DISTANCIA / $carro["consumo_alcool"]) * PRECO_ALCOOL,2,',',''),
        "total_diarias" => "R$ " .  number_format($carro["dias_aluguel"] * $carro["valor_diaria"],2,',','')
    ];

    arsort($custoCarro);
    
    //print_r($custoCarro);
    array_push($orcamento, $custoCarro);
}


print_r($orcamento);
?>