import { Estudante } from "./classes";
import { Professor } from "./classes";

let estudante1 = new Estudante("João", 20, "Gastronomia");
let professor1 = new Professor("Erick Jacquin", 60, "Confeitaria");

estudante1.apresentar();
professor1.apresentar();

estudante1.editarCurso();
professor1.editarCurso();
