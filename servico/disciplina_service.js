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
        this.repositorio.perquisarPorCodigo(codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

}