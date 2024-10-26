import { InterfaceEstudante } from "./interfaces";
import { InterfaceProfessor } from "./interfaces";

export class Estudante implements InterfaceEstudante {
  nome: string;
  idade: number;
  curso: string;

  constructor(nome: string, idade: number, curso: string) {
    (this.nome = nome), (this.idade = idade), (this.curso = curso);
  }
  apresentar(): void {
    console.log(`Nome do aluno: ${this.nome}
    Idade do aluno: ${this.idade}
    Curso do aluno: ${this.curso}`);
  }
  editarCurso(): boolean {
    console.log("Chamou o método editarCurso()");
    return false;
  }
}

export class Professor implements InterfaceProfessor {
  nome: string;
  idade: number;
  materia: string;

  constructor(nome: string, idade: number, materia: string) {
    (this.nome = nome), (this.idade = idade), (this.materia = materia);
  }
  apresentar(): void {
    console.log(`Nome do professor: ${this.nome}
    Idade do professor: ${this.idade}
    Matéria do professor: ${this.materia}
    `);
  }
  editarCurso(): boolean {
    console.log("Chamou o método editarCurso()");
    return true;
  }
}
