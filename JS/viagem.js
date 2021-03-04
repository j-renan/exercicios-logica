/* ## Viagem

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
*/

const dadosCarros = [
    {modelo: 'Fusca', consumo_gasolina: 6, consumo_alcool: 8, dias_aluguel: 12, valor_diaria: 45},
    {modelo: 'Gol', consumo_gasolina: 10, consumo_alcool: 9, dias_aluguel: 10, valor_diaria: 63},
    {modelo: 'Polo', consumo_gasolina: 9, consumo_alcool: 8, dias_aluguel: 9, valor_diaria: 89},
    {modelo: 'Uno', consumo_gasolina: 15, consumo_alcool: 12, dias_aluguel: 9, valor_diaria: 75}
]



let orcamento = []
const distancia = 3500
const precoGasolina = 5
const precoAlcool = 3.29

function calcularViagemPorVeiculo(){
    dadosCarros.map(carro => {
        let custoPorCarro = {
            modelo: carro.modelo,
            custo_gasolina: `R$ ${((distancia / carro.consumo_gasolina) * precoGasolina).toFixed(2).replace('.', ',')}`,
            custo_alcool: `R$ ${((distancia / carro.consumo_alcool) * precoAlcool).toFixed(2).replace('.', ',')}`,
            total_diarias: `R$ ${(carro.valor_diaria * carro.dias_aluguel).toFixed(2).replace('.', ',')}`
        }

        orcamento.push(custoPorCarro)

    })
    
    orcamento.sort((a,b) => {
        if(a.total_diarias < b.total_diarias){
            return 1
        }
        if(a.total_diarias > b.total_diarias){
          return -1
        }
        return 0 
    }).reverse()
    
    console.log(orcamento)
}

calcularViagemPorVeiculo()


