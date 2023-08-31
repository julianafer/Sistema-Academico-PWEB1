class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    atualizar(codigo, novoNome) {
        const indxDisciplinaAAtualizar = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        this.disciplinas[indxDisciplinaAAtualizar].nome(novoNome);
    }

    listar() {
        return this.disciplinas;
    }

    inserirAlunoNaDisciplina(aluno, disciplina) {
        const DisciplinaAInserir = this.disciplinas.find(d => d.codigo === disciplina.codigo);
        if (DisciplinaAInserir) {
            disciplina.adicionarAluno(aluno)
        }
    }

}