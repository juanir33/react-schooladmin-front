import sideL from "../helpers/sideLinkObject";

const sideLs = [
  new sideL("home", "/home", "Panel", ["admin"]),
  new sideL("users", "/alumnos", "Alumnos", ["admin", "alumno"]),
  new sideL("user-tie", "/profesores", "Profesores", ["admin",  "profesor"]),
  new sideL("chalkboard", "/materias", "Materias", ["admin", "profesor"]),
 
  new sideL("pen-alt", "/notas", "Notas", ["admin", "profesor"]),

];

export default sideLs;

