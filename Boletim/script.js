/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

    let nameStudent = prompt("Qual o nome do aluno: ")
    alert(`Seja bem-vindo ao portal ${nameStudent}`)

    alert("Coloque suas 3 notas")

    let notaMateria1 = prompt("Nota da primeira materia: ")
    let notaMateria2 = prompt("Nota da segunda materia: ")
    let notaMateria3 = prompt("Nota da terceira materia: ")

    notaMateria1 = Number(notaMateria1)
    notaMateria2 = Number(notaMateria2)
    notaMateria3 = Number(notaMateria3)

    let media = ((notaMateria1 + notaMateria2 + notaMateria3)/3)

    let result = media > 6

    media = media.toFixed(2)

    if (result) {
        alert('Você foi aprovado! Parabéns')
    } else{
        alert('Você não foi aprovado')
    }

    alert(`${nameStudent} sua média foi ${media}`)