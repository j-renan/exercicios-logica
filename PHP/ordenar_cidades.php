<!-- - Crie um array com 10 nomes de cidades e ordene os mesmos e ordem alfabética
- Com o mesmo array ordene agora na ordem de Z-A -->

<?php
$cidades = ['piracicaba', 'são paulo', 'jacutinga', 'ipeuna', 'charqueada', 'fortaleza', 'maceio', 'recife', 'aracaju', 'cuiaba'];

sort($cidades);// de A a Z

print_r($cidades);

rsort($cidades);// de Z a A

print_r($cidades);
?>