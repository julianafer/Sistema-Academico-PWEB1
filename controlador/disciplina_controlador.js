class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nomeDisciplina");
        const codigoDisciplina = document.querySelector("codigoDisciplina");
        const disciplinaInserida = this.servico.inserir(codigoDisciplina.ariaValueMax, nomeDisciplina.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Disciplina: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

}