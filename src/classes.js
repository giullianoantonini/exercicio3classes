"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = exports.Estudante = void 0;
class Estudante {
    constructor(nome, idade, curso) {
        (this.nome = nome), (this.idade = idade), (this.curso = curso);
    }
    apresentar() {
        console.log(`Nome do aluno: ${this.nome}
    Idade do aluno: ${this.idade}
    Curso do aluno: ${this.curso}`);
    }
    editarCurso() {
        console.log("Chamou o método editarCurso()");
        return false;
    }
}
exports.Estudante = Estudante;
class Professor {
    constructor(nome, idade, materia) {
        (this.nome = nome), (this.idade = idade), (this.materia = materia);
    }
    apresentar() {
        console.log(`Nome do professor: ${this.nome}
    Idade do professor: ${this.idade}
    Matéria do professor: ${this.materia}
    `);
    }
    editarCurso() {
        console.log("Chamou o método editarCurso()");
        return true;
    }
}
exports.Professor = Professor;
