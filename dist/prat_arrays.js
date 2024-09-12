// Gerador de notas de 0 a 10
nota = () => {
  return Math.floor(Math.random() * 11);
};

// Declaração da classe Aluno para construção dos objetos
class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.nota = nota();
  }
}

// Array de objetos Aluno criados a partir do construtor
const historico = [new Aluno('Paula'), new Aluno('Cristina'), new Aluno('Hellen'), new Aluno('Lucas'), new Aluno('Pedro')];

// Filtrando alunos aprovados
function filtraAlunosAprovados(historico) {
  return historico.filter(aluno => aluno.nota >= 6);
}
const alunosAprovados = filtraAlunosAprovados(historico);

// Mostrando o histórico dos alunos e dos alunos aprovados
console.log(historico);
console.log(alunosAprovados);