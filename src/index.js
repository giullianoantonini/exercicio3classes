"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const classes_2 = require("./classes");
let estudante1 = new classes_1.Estudante("João", 20, "Gastronomia");
let professor1 = new classes_2.Professor("Erick Jacquin", 60, "Confeitaria");
estudante1.apresentar();
professor1.apresentar();
estudante1.editarCurso();
professor1.editarCurso();
