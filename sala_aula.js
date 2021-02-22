/* Um professor usa a planilha do excel para calcular as notas e médias dos alunos, 
observe as informações abaixo:

|  Aluno         |Nota prova 1          |Nota prova 2     | Faltas   |
|----------------|----------------------|-----------------|----------|
|Carlos          |7,8                   |5,3              | 5        |
|Antonio         |9,4                   |4,6              | 7        |
|Daniela         |5,7                   |2,8              | 2        |
|Pedro           |2,7                   |8,8              | 6        |
|Simone          |2,7                   |3,8              | 3        |
|Jéssica         |4,9                   |3,3              | 8        |

Ajude o professor a calcular a média final dos alunos, onde a média é (nota 1 + nota 2) / 2.
Para que o aluno seja aprovado ele precisa ter média maior ou igual a 6 e ter no máximo 4 faltas. */

let dadosAlunos = [
    {nome: 'Carlos', nota1: 7.8, nota2: 5.3, faltas:5},
    {nome: 'Antonio', nota1: 9.4, nota2: 4.6, faltas:7},
    {nome: 'Daniela', nota1: 5.7, nota2: 2.8, faltas:2},
    {nome: 'Pedro', nota1: 2.7, nota2: 8.8, faltas:6},
    {nome: 'Simone', nota1: 2.7, nota2: 3.8, faltas:3},
    {nome: 'Jéssica', nota1: 4.9, nota2: 3.3, faltas:8},
]


function calcularMedia(){
    dadosAlunos.map((aluno, index) => {
        let media = (aluno.nota1 + aluno.nota2) / 2
        dadosAlunos[index]['media'] = media
        if(aluno.media >= 6 && aluno.faltas <= 4){
            dadosAlunos[index]['aprovado'] = true
        } else dadosAlunos[index]['aprovado'] = false
    })
    console.log(dadosAlunos)
}

calcularMedia()







