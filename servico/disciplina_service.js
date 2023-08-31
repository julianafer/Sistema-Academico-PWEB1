class DisciplinaService {

    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.perquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    perquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(aluno, disciplina) {
        this.repositorio.inserirAlunoNaDisciplina(aluno, disciplina);
    }

}